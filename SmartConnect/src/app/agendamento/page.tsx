'use client';

import React, { useEffect, useState } from 'react';
import { Agendamento } from '../../../types';

const AgendamentoPage = () => {
  const [action, setAction] = useState<'novo' | 'ver'>('novo');
  const [formData, setFormData] = useState<Agendamento>({
    id: 0,
    placa: '',
    modelo: '',
    marca: '',
    data: '',
    horario: '',
    endereco: '',
  });
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [message, setMessage] = useState('');

  const oficinas = ['Oficina A', 'Oficina B', 'Oficina C'];

  const fetchAgendamentos = async () => {
    const response = await fetch('/api/agendamentos');
    const data = await response.json();
    setAgendamentos(data);
  };


  useEffect(() => {
    fetchAgendamentos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = formData.id === 0 ? 'POST' : 'PUT';
    const response = await fetch('/api/agendamentos', {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    showMessage(result.message || (formData.id === 0 ? 'Agendamento criado com sucesso!' : 'Agendamento atualizado com sucesso!'));

    setFormData({ id: 0, placa: '', modelo: '', marca: '', data: '', horario: '', endereco: '' });
    setAction('ver');
    fetchAgendamentos();
  };

  const handleDelete = async (id: number) => {
    const response = await fetch('/api/agendamentos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();
    showMessage(result.message || 'Agendamento excluído com sucesso!');
    fetchAgendamentos();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-4">Agendamentos</h1>
      {message && <div className="mb-4 text-green-600">{message}</div>} 
      <div className="flex space-x-4 mb-6">
        <button onClick={() => setAction('novo')} className="bg-blue-500 text-white px-4 py-2 rounded">Novo Agendamento</button>
        <button onClick={() => setAction('ver')} className="bg-blue-500 text-white px-4 py-2 rounded">Ver Agendamentos</button>
      </div>

      {action === 'novo' && (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">{formData.id === 0 ? 'Novo Agendamento' : 'Editar Agendamento'}</h2>
          <div className="mb-4">
            <label className="block mb-2">Placa</label>
            <input type="text" name="placa" value={formData.placa} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Modelo</label>
            <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Marca</label>
            <input type="text" name="marca" value={formData.marca} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Data</label>
            <input type="date" name="data" value={formData.data} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Horário</label>
            <input type="time" name="horario" value={formData.horario} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Endereço da Oficina</label>
            <select name="endereco" value={formData.endereco} onChange={handleChange} className="border rounded w-full py-2 px-3" required>
              <option value="">Selecione uma oficina</option>
              {oficinas.map((oficina) => (
                <option key={oficina} value={oficina}>{oficina}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{formData.id === 0 ? 'Agendar' : 'Atualizar'}</button>
        </form>
      )}

      {action === 'ver' && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">Lista de Agendamentos</h2>
          <ul>
            {agendamentos.map(agendamento => (
              <li key={agendamento.id} className="border p-4 mb-2 rounded">
                <div><strong>Placa:</strong> {agendamento.placa}</div>
                <div><strong>Modelo:</strong> {agendamento.modelo}</div>
                <div><strong>Marca:</strong> {agendamento.marca}</div>
                <div><strong>Data:</strong> {agendamento.data}</div>
                <div><strong>Horário:</strong> {agendamento.horario}</div>
                <div><strong>Endereço:</strong> {agendamento.endereco}</div>
                <div className="flex space-x-2 mt-2">
                  <button onClick={() => {
                    setFormData(agendamento); 
                    setAction('novo'); 
                  }} className="bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
                  <button onClick={() => handleDelete(agendamento.id)} className="bg-red-500 text-white px-2 py-1 rounded">Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AgendamentoPage;

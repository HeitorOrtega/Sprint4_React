"use client"; 

import { useState } from 'react';
import Image from 'next/image';

export default function Produto() {
  const [modal, setModal] = useState<string | null>(null);

  const abrirModal = (id: string) => {
    setModal(id);
  };

  const fecharModal = () => {
    setModal(null);
  };

  return (
    <main>
      <section className="banner-produto h-[400px] text-white bg-cover flex items-center" style={{ backgroundImage: "url('../img/banner-oficial.png')" }}>
        <div className="container mx-auto text-center">
          <p className="text-4xl font-extrabold mb-3">
            SmartCheck: Transforme a Eficiência do seu Negócio
          </p>
            <p className='text-2xl'>
            Clique nos ícones abaixo para saber mais sobre o produto
          </p>
        </div>
      </section>

      <section className="boxes py-10"> 
        <div className="container mx-auto flex flex-wrap justify-center gap-60"> 
          <div className="box text-center cursor-pointer" onClick={() => abrirModal('modalFunc')}>
            <Image src="/img/icon-engrenagem.png" alt="Ícone de Funcionalidades" width={100} height={100} className="mx-auto mb-2" />
            <h2 className="text-lg">Funcionalidades</h2>
          </div>
          <div className="box text-center cursor-pointer" onClick={() => abrirModal('modalBenef')}>
            <Image src="/img/icon-descricao.png" alt="Ícone de Benefícios" width={100} height={100} className="mx-auto mb-2" />
            <h2 className="text-lg">Benefícios</h2>
          </div>
          <div className="box text-center cursor-pointer" onClick={() => abrirModal('modalUso')}>
            <Image src="/img/icon-interrogacao.png" alt="Ícone de Como Usar" width={100} height={100} className="mx-auto mb-2" />
            <h2 className="text-lg">Como Usar</h2>
          </div>
        </div>
      </section>

      {/* Modais */}
      
      {modal && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-8"> 
            <div className="conteudo-modal bg-white p-5 rounded-lg relative shadow-lg max-w-md w-full">
              <span className="fechar absolute top-2 right-2 text-gray-400 hover:text-black cursor-pointer" onClick={fecharModal}>&times;</span>
              {modal === 'modalFunc' && (
                <>
                  <h2 className="text-lg font-bold">Funcionalidades</h2>
                  <p className="mt-2">
                    Diagnósticos Completos: Lê e traduz códigos de falhas usando a tecnologia OBD-II, oferecendo descrições claras e soluções possíveis diretamente no seu smartphone ou dentro do nosso site. <br /><br />
                    Monitoramento em Tempo Real: Visualize parâmetros críticos do veículo, como temperatura do motor e RPM, para uma manutenção proativa e melhor desempenho. <br /><br />
                    Histórico de Manutenção: Guarde registros de manutenções e configure lembretes baseados em quilometragem ou tempo. <br /><br />
                    Assistência e Comunidade: Consulte mecânicos online e interaja com outros usuários para compartilhar dicas e resolver problemas. <br /><br />
                    Localização de Oficinas: Encontre a oficina mais próxima rapidamente em casos de emergência através de um mapa integrado. <br /><br />
                    Cadastro de Oficina: Registre sua oficina e gerencie filas e agendamentos online, facilitando o acesso para os clientes.
                  </p>
                </>
              )}
              {modal === 'modalBenef' && (
                <>
                  <h2 className="text-lg font-bold">Benefícios</h2>
                  <p className="mt-2">
                    Economia: Diminui visitas a oficinas ao permitir diagnósticos caseiros, economizando tempo e dinheiro. <br /><br />
                    Controle do Usuário: Dá ao dono do veículo completo conhecimento e controle sobre a condição e operação do carro. <br /><br />
                    Prevenção: Detecta problemas cedo, reduzindo a chance de reparos caros e aumentando a vida útil do veículo.
                  </p>
                </>
              )}
              {modal === 'modalUso' && (
                <>
                  <h2 className="text-lg font-bold">Como Usar</h2>
                  <p className="mt-2">
                    Conexão: Instalação do dispositivo na porta OBD-II do seu carro, realize a conexão via Bluetooth ao seu smartphone. <br /><br />
                    Monitoramento: Realize o login no app ou no site para realizar diagnósticos completos e acompanhar o estado do seu veículo em tempo real.<br /><br />
                    Decisão: Receba análises claras e orientações práticas sobre como proceder com a manutenção do seu carro.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};


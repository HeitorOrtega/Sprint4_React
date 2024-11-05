import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Agendamento {
  id: number;
  placa: string;
  modelo: string;
  marca: string;
  data: string;
  horario: string;
  endereco: string;
}

const dataFilePath = path.join(process.cwd(), 'data', 'agendamentos.json');

let agendamentos: Agendamento[] = [];
let nextId = 1; 

const loadAgendamentos = () => {
  if (fs.existsSync(dataFilePath)) {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    agendamentos = JSON.parse(data);
    nextId = agendamentos.length > 0 ? Math.max(...agendamentos.map(a => a.id)) + 1 : 1;
  }
};

const saveAgendamentos = () => {
  fs.writeFileSync(dataFilePath, JSON.stringify(agendamentos, null, 2));
};

loadAgendamentos(); 

export async function GET() {
  return NextResponse.json(agendamentos);
}

export async function POST(request: Request) {
  const body: Agendamento = await request.json();
  const newAgendamento = { ...body, id: nextId++ };
  agendamentos.push(newAgendamento);
  saveAgendamentos(); 
  return NextResponse.json(newAgendamento, { status: 201 });
}

export async function PUT(request: Request) {
  const body: Agendamento = await request.json();
  const index = agendamentos.findIndex(a => a.id === body.id);

  if (index === -1) {
    return NextResponse.json({ message: 'Agendamento não encontrado' }, { status: 404 });
  }

  agendamentos[index] = body;
  saveAgendamentos(); 
  return NextResponse.json(body);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const index = agendamentos.findIndex(a => a.id === id);

  if (index === -1) {
    return NextResponse.json({ message: 'Agendamento não encontrado' }, { status: 404 });
  }

  agendamentos.splice(index, 1);
  saveAgendamentos();
  return NextResponse.json({ message: 'Agendamento excluído com sucesso' });
}

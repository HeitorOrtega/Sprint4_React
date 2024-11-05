export interface Agendamento {
    id: number;
    placa: string;
    modelo: string;
    marca: string;
    data: string;
    horario: string;
    endereco: string;
  }
  
  export type Mode = 'new'| 'view' | 'edit' | 'delete';


  
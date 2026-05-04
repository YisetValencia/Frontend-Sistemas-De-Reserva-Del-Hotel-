export interface ReservaServiciosRead {
  id_reserva:   string;
  id_servicio:  string;  
  cantidad:     number;
}
 
export interface ReservaServiciosCreate {
  id_reserva:  string;
  id_servicio: string;
  cantidad:    number;
  
}
 
export interface ReservaServiciosUpdate {
  cantidad: number;
}

export interface ReservaRead {
  id_reserva: string;
  id_usuario: string;
  id_habitacion: string;
  fecha_entrada: string;
  fecha_salida: string;
  numero_de_personas: number;
}

export interface ReservaCreate {
  id_usuario: string;
  id_habitacion: string;
  fecha_entrada: string;
  fecha_salida: string;
  numero_de_personas: number;
  id_usuario_crea: string;
}

export interface ReservaUpdate {
  id_usuario: string;
  id_habitacion: string;
  fecha_entrada: string;
  fecha_salida: string;
  numero_de_personas: number;
  id_usuario_edita: string;
}

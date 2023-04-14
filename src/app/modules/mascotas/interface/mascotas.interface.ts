export interface IMascota {
    id:string;
    raza:string;
    des:string;
    img?:string;
    origen:string;
    peso:string;
    guardian:string;
    salud:string;
    ejercicio:string;
    nutricion:string
}
export enum Guardian{
    no = "No",
    si = "Si",
}

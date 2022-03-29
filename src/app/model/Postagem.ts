import {Usuario} from './Usuario'
import { Tema } from './Tema';

export class Postagem{
    public id:number
    public titulo: string
    public texto: string
    public data: Date
    public usurario: Usuario
    public tema: Tema
}
 
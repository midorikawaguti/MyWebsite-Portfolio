/*1. Create Project Model*/

export class Projects{
  id!:string;
  name!:string;
  price!:number;
  favorite!:boolean;
  imageUrl!:string;
  tags?: string[];
}

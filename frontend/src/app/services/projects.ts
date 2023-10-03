import { Injectable } from '@angular/core';
import { Projects } from '../shared/models/Projects';
import { sample_projects } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAll(): Projects[]{
    return sample_projects;
  }

  getAllProjectsBySearchTerm(searchTerm:string){
    return this.getAll().filter(project=>project.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}

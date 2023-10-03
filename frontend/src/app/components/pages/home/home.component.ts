import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/projects';
import { Projects } from 'src/app/shared/models/Projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  project: Projects[] = [];

  constructor(private projectService: ProjectService, activatedRoute: ActivatedRoute ){
    this.project = projectService.getAll();
  }

ngOInit(): void{

}
}

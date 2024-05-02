import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/projects';
import { Projects } from 'src/app/shared/models/Projects';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {

  project: Projects[] = [];
  sample_projects: any;

  constructor(private projectService: ProjectService, activatedRoute: ActivatedRoute ){
    this.project = projectService.getAll();
  }

ngOInit(): void{

}
}



import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/projects';
import { Projects } from 'src/app/shared/models/Projects';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrls: ['./project-detail-page.component.css']
})
export class ProjectDetailPageComponent {

  projects: Projects[] = [];
  projectId: string = '';
  index: number = -1;


  constructor(private projectService: ProjectService, private route: ActivatedRoute ){
    this.projects = projectService.getAll();
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('ProjectID') ?? ''; // Make sure it matches the name in the routing configuration

    if (this.projectId) {
      this.index = this.projects.findIndex(project => project._id === this.projectId);
    }

  }

}

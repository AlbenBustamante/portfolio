import { Pipe, PipeTransform } from '@angular/core';
import { ProjectStatus } from '../models/project-status.enum';

@Pipe({
  name: 'projectStatus',
})
export class ProjectStatusPipe implements PipeTransform {
  transform(status: ProjectStatus): string {
    switch (status) {
      case ProjectStatus.COMPLETED:
        return 'Completed';
      case ProjectStatus.IN_PROGRESS:
        return 'In progress';
      case ProjectStatus.ONLINE:
        return 'Online';
    }
  }
}

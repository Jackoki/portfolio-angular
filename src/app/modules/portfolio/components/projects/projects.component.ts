import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/Projects.interface';

import {MatDialog, MatDialogModule} from '@angular/material/dialog'; 
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img//projects/vfull.png',
      alt: '',
      title: 'Lorem Ipsum',
      with: '100px',
      height: '51px',
      description: 'Lorem ipsum dolor sit amet. Qui magni veritatis aut repellendus vitae et eligendi omnis vel architecto recusandae. Rem consequatur illum in fugiat mollitia qui reprehenderit tempora sit voluptatem velit. Hic earum vero et reprehenderit accusamus et nisi omnis vel facilis quasi. ',
      links: [
        {
          name: 'Texto Botão',
          href:'',
        },
      ], 
    },

    {
      src: 'assets/img//projects/vfull.png',
      alt: '',
      title: 'Lorem Ipsum',
      with: '100px',
      height: '51px',
      description: 'Lorem ipsum dolor sit amet. Qui magni veritatis aut repellendus vitae et eligendi omnis vel architecto recusandae. Rem consequatur illum in fugiat mollitia qui reprehenderit tempora sit voluptatem velit. Hic earum vero et reprehenderit accusamus et nisi omnis vel facilis quasi. ',
      links: [
        {
          name: 'Texto Botão',
          href:'',
        },
      ], 
    },

    {
      src: 'assets/img//projects/vfull.png',
      alt: '',
      title: 'Lorem Ipsum',
      with: '100px',
      height: '51px',
      description: 'Lorem ipsum dolor sit amet. Qui magni veritatis aut repellendus vitae et eligendi omnis vel architecto recusandae. Rem consequatur illum in fugiat mollitia qui reprehenderit tempora sit voluptatem velit. Hic earum vero et reprehenderit accusamus et nisi omnis vel facilis quasi. ',
      links: [
        {
          name: 'Texto Botão',
          href:'',
        },
      ], 
    },

    {
      src: 'assets/img//projects/vfull.png',
      alt: '',
      title: 'Lorem Ipsum',
      with: '100px',
      height: '51px',
      description: 'Lorem ipsum dolor sit amet. Qui magni veritatis aut repellendus vitae et eligendi omnis vel architecto recusandae. Rem consequatur illum in fugiat mollitia qui reprehenderit tempora sit voluptatem velit. Hic earum vero et reprehenderit accusamus et nisi omnis vel facilis quasi. ',
      links: [
        {
          name: 'Texto Botão',
          href:'',
        },
      ], 
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}

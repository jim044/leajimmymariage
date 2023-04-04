import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-imagecarousel',
  templateUrl: './imagecarousel.component.html',
  styleUrls: ['./imagecarousel.component.scss']
})
export class ImagecarouselComponent {

  constructor(
    public dialogRef: MatDialogRef<ImagecarouselComponent>,
    @Inject(MAT_DIALOG_DATA) public imageCarousel: string
  ) {}

  imageSelected! : any;
}

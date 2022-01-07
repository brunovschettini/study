import { PhotoBoardService } from './../../shared/components/photo-board/services/photo-board.service';
import { Photo } from './../../shared/components/photo-board/interfaces/photo';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  title = 'Angular testing';
  public photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) {}

  ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
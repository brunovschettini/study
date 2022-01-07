import { PhotoBoardService } from './services/photo-board.service';
import { PhotoBoardModule } from './photo-board.module';
import { Photo } from './interfaces/photo';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoardComponent } from './photo-board.component';
import { Component, ViewChild } from '@angular/core';

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let i = 0; i < 9; i++) {
    photos.push({ id: i + 1, url: '', description: '' });
  }
  return photos;
}

describe(PhotoBoardComponent.name + 'Outros', () => {
  let component: PhotoBoardTestComponent;
  let fixture: ComponentFixture<PhotoBoardTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display and columns when (@Input photos) has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    expect(component.board.rows.length).withContext('Number of rows').toBe(3);
    expect(component.board.rows[0].length)
      .withContext('Number of cols from the first row')
      .toBe(4);
    expect(component.board.rows[1].length)
      .withContext('Number of cols from the second row')
      .toBe(4);
    expect(component.board.rows[2].length)
      .withContext('Number of cols from the third row')
      .toBe(1);
  });
});

@Component({
  template: `<app-photo-board [photos]="photos"></app-photo-board>`,
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
  public photos: Photo[] = [];
}

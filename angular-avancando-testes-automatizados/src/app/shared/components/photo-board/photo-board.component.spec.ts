import { PhotoBoardService } from './services/photo-board.service';
import { PhotoBoardModule } from './photo-board.module';
import { Photo } from './interfaces/photo';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoardComponent } from './photo-board.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let i = 0; i < 9; i++) {
    photos.push({ id: i + 1, url: '', description: '' });
  }
  return photos;
}

describe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display and columns when (@Input photos) has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true),
    };
    component.ngOnChanges(change);
    expect(component.rows.length).withContext('Number of rows').toBe(3);
    expect(component.rows[0].length)
      .withContext('Number of cols from the first row')
      .toBe(4);
    expect(component.rows[1].length)
      .withContext('Number of cols from the second row')
      .toBe(4);
    expect(component.rows[2].length)
      .withContext('Number of cols from the third row')
      .toBe(1);
  });
});

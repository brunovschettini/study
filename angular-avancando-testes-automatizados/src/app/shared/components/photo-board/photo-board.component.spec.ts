import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { PhotoBoardModule } from './photo-board.module';
import { buildPhotoList } from './test/buildPhotoList';

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

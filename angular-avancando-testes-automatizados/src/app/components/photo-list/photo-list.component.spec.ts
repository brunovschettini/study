import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from './../../shared/components/photo-board/services/photo-board.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/buildPhotoList';
import { of } from 'rxjs';

describe(PhotoListComponent.name, () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let photoBoardService: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [PhotoBoardService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    photoBoardService = TestBed.inject(PhotoBoardService);
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('(D) Should display board when data arrives', () => {
    const photos = buildPhotoList();
    spyOn(photoBoardService, 'getPhotos').and.returnValue(of(photos));
    fixture.detectChanges();
    const loader = fixture.nativeElement.querySelector('.loader');
    const board = fixture.nativeElement.querySelector('app-photo-board');
    expect(loader).withContext('Should display loader').toBeNull();
    expect(board).withContext('Should not display board').not.toBeNull();
  });
});

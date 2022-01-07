import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PhotoBoardService } from './photo-board.service';

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(PhotoBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

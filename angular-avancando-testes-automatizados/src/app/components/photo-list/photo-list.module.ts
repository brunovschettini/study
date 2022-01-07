import { PhotoBoardService } from './../../shared/components/photo-board/services/photo-board.service';
import { PhotoBoardModule } from './../../shared/components/photo-board/photo-board.module';
import { PhotoFrameModule } from './../../shared/components/photo-frame/photo-frame.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [CommonModule, PhotoBoardModule],
  exports: [PhotoListComponent],
  providers: [PhotoBoardService],
})
export class PhotoListModule {}

import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss'],
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Output() public liked: EventEmitter<void> = new EventEmitter();
  @Input() description: string = '';
  @Input() src: string = '';
  @Input() likes: number = 0;
  private _debounceSubject$: Subject<void> = new Subject();
  private _unsubcribe$: Subject<void> = new Subject();

  public ngOnInit(): void {
    this._debounceSubject$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(takeUntil(this._unsubcribe$))
      .subscribe(() => this.liked.emit());
  }

  public ngOnDestroy(): void {
    this._unsubcribe$.next();
    this._unsubcribe$.complete();
  }

  public like(): void {
    this._debounceSubject$.next();
  }
}

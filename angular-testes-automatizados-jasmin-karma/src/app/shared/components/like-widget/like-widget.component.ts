 
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {

  @Output() public likedOutput = new EventEmitter<void>();
  @Input() public likesInput = 0;
  @Input() public id = null;

  //public fonts = { faThumbsUp };

  constructor() { }

  ngOnInit(): void {
  }



}

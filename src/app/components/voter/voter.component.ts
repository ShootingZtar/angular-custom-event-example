import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `<h4>{{ name }}</h4>
    <button (click)=vote(true) [disabled]=voted>Yes</button>
    <button (click)=vote(false) [disabled]=voted>No</button>`,
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  constructor() { }

  @Input() name: string
  @Output() onDoVote = new EventEmitter<boolean>()

  voted = false

  vote(agreed: boolean) {
    this.onDoVote.emit(agreed)
    this.voted = true
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-event-listener';

  agree = 0
  disagree = 0
  voters = ['One', 'Two', 'Three']

  onVoted(agreed:boolean){
    agreed ? this.agree++ : this.disagree++
  }
}

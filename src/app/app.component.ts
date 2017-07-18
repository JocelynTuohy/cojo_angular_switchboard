import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Switchboard';
  switches: Array<object> = [{}]
  constructor(){
    for (let i = 0; i < 10; ++i){
      this.switches[i] = {on: false, index: i};
    }
  }
  toggle(index){
    let thisSwitch = this.switches[index];
    thisSwitch['on'] ? thisSwitch['on'] = false : thisSwitch['on'] = true;
    return;
  }
}

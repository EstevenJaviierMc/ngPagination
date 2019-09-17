import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
count: number = 0;

   ngDoCheck() {

     for(let i= 0; i<10; i++){
       setTimeout(() => { this.count = i; },1000);

     };
    }

}

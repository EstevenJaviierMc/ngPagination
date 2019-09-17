import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
count: number = 0;

   ngDoCheck() {

     async for(let i= 0; i<10; i++) {
       setTimeout(() => { count = await i },1000);

     }
    }

}

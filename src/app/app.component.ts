import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
count: number = 0;

   ngAfterContentChecked() {

     
    setInterval(() => { this.count = this.count+1; },1000);

    
    }

}

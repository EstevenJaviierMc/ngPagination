import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges { 
count: number = 0;

   ngOnChanges() {

     
    setInterval(() => { this.count = this.count+1; },1000);

    
    }

}

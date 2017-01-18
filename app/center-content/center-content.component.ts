import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'center-content',
  templateUrl: 'app/center-content/center-content.component.html',
  styleUrls: ['app/center-content/center-content.component.css'],
})
export class CenterContentComponent  {

    name: string = "Holly Bertolet";
    subtext: string = "Some Really Neat Subtext about me";

    Constructor( private router: Router ){}

    public email(){
        window.location.href = "mailto:hbertolet@gmail.com";
    }


}

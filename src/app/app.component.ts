import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  testo_salvato:string="(ancora nulla)"
  testo_salvato2:string="(ancora nulla)"
  testo_salvato3:string="(ancora nulla)"


  constructor() {}

  onClick1(htmlInput:HTMLInputElement) {
    console.log(htmlInput)
    this.testo_salvato=htmlInput.value 
  }

  


}


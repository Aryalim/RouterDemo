import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RouterDemo';
  reactiveForm: FormGroup;
  
  ngOnInit(){
    this.reactiveForm=new FormGroup({
      
    });

  }
}

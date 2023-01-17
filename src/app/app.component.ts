import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'reactive-forms';
  inputForm : FormGroup;
  projectNames:string[]=['Test'];

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      'projectName' : new FormControl(null, [Validators.required, this.validateProject]),
      'mail' : new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus' : new FormControl('Stable')
    });
  }

  onSubmit(){
    console.log(this.inputForm);
  }
  
  validateProject(control : FormControl): { [key: string] : boolean }  {
      if(this.projectNames.includes(control.value)) {
        return {'projectNameInvalid' : true};
      }
      else {
        return null;
      } 
  }
  }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-id-form',
  templateUrl: './id-form.component.html',
  styleUrls: ['./id-form.component.css']
})
export class IdFormComponent implements OnInit {
  idform: FormGroup;
 
  constructor() {
    this.idform = new FormGroup({
      firstName: new FormControl('',Validators.required),
      fullName: new FormControl('',Validators.required),
      designation: new FormControl('',Validators.required),
      empNo: new FormControl('',[Validators.required,Validators.pattern(/^8[0-9]{6}/)]),
      blood: new FormControl('',Validators.required),
      issues: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.pattern(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/)]),
    contactNumbers: new FormGroup({
            mobile: new FormControl(''),
            emergency: new FormControl('')
          },this.checkAtleastOneNumber)
           })
          
  }
  checkAtleastOneNumber(control: AbstractControl): ValidationErrors | null {
    console.log(control);
    const mobile = control.get('mobile').value;
    const emergency = control.get('emergency').value;
    if (mobile === '' && emergency === '') {
      return {
        contactNumberMissing: true
      }
    }
    return null;
  }

 
  
  addDetails() {
    console.log(this.idform.value);
  }
  ngOnInit() {

  }
  

  


}

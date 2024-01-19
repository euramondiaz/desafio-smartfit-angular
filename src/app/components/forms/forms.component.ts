import { Component } from '@angular/core';
import { FormBuilder,FormGroup, } from '@angular/forms';
import { GetUnitService } from 'src/app/services/get-unit.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {
  results= [];
  formGroup!: FormGroup;

  constructor (private formBuilder: FormBuilder, private unitService: GetUnitService){}


  ngOnInit(): void {
    this.unitService.getAllTnits().subscribe(data => console.log(data));
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed:  false
    })
  }

  onSubmit(): void {
    console.log(this.formGroup.value)
  }
  https://agilidadeweb.com/home-agilidade-2/
  onClean(): void {
    this.formGroup.reset();
  }
}


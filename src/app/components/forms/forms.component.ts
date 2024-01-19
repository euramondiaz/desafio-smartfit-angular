import { Component } from '@angular/core';
import { FormBuilder,FormGroup, } from '@angular/forms';
import { GetUnitService } from 'src/app/services/get-unit.service';
import { Location } from 'src/app/types/location.interface';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {
  results: Location []= [];
  formGroup!: FormGroup;
  filteredResults: Location[] = [];
  constructor (private formBuilder: FormBuilder, private unitService: GetUnitService){}


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed:  true
    })
    this.unitService.getAllTnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmit(): void {
    if (!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(location => location.opened === true)
    }
    else {
      this.filteredResults = this.results;
    }
}

  onClean(): void {
    this.formGroup.reset();
  }
}

//console.log(data)

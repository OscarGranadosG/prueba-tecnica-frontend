import { Component, OnInit } from '@angular/core';
import { PosServicesService } from 'src/app/services/pos-services.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {

  public createForm: FormGroup;
  public results;

  constructor(private posService: PosServicesService,
            private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForms();
  }

  get formCtrls() {
    return this.createForm.controls;
  }

  createForms() {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      value_card: ['',  Validators.required],
      value_cash: ['',  Validators.required]
    });
  }

  dataSaleObject(): any {
    return {
      name: this.formCtrls.name.value,
      value_card: this.formCtrls.value_card.value,
      value_cash: this.formCtrls.value_cash.value
    };
  }

  saveSale() {
    this.posService.saveSale(this.dataSaleObject()).subscribe(
      (success) => {
        this.results = success;
      },
      (error) => {}
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { PosServicesService } from 'src/app/services/pos-services.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-close-pos',
  templateUrl: './close-pos.component.html',
  styleUrls: ['./close-pos.component.css']
})
export class ClosePosComponent implements OnInit {

  public createForm: FormGroup;
  public data;
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
      date_close: [''],
      hour_close: [''],
      value_card: [''],
      value_cash: [''],
      value_close: [''],
      value_open: [''],
      value_sales: ['']
    });
  }

  getDataClose() {
    this.posService.getClosePosService().subscribe(
      (sucess) => {
        this.data = sucess;
        this.setDataClose();
        this.dataCloseObject();
      },
      (error) => {}
    );
  }

  dataCloseObject(): any {
    return {
      date_close: this.formCtrls.date_close.value,
      hour_close: this.formCtrls.hour_close.value,
      value_card: this.formCtrls.value_card.value,
      value_cash: this.formCtrls.value_cash.value,
      value_close: this.formCtrls.value_close.value,
      value_open: this.formCtrls.value_open.value,
      value_sales: this.formCtrls.value_sales.value,
    };
  }

  setDataClose() {
    let data = this.data.results[0];
      this.formCtrls.date_close.setValue(data.date_close);
      this.formCtrls.hour_close.setValue(data.hour_close);
      this.formCtrls.value_card.setValue(data.value_card);
      this.formCtrls.value_cash.setValue(data.value_cash);
      this.formCtrls.value_close.setValue(data.value_close);
      this.formCtrls.value_open.setValue(data.value_open);
      this.formCtrls.value_sales.setValue(data.value_sales);
  }

  saveCloseData() {
    this.posService.saveClosePosService(this.dataCloseObject()).subscribe(
      (sucess) => {
        this.results =sucess;
      },
      (error) => {}
    );
  }


}

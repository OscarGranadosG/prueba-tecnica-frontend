import { Component, OnInit } from '@angular/core';
import { PosServicesService } from 'src/app/services/pos-services.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-open-pos',
  templateUrl: './open-pos.component.html',
  styleUrls: ['./open-pos.component.css']
})
export class OpenPosComponent implements OnInit {

  public data;
  public results;
  public createForm: FormGroup;
  

  constructor(private posService: PosServicesService,
                private formBuilder: FormBuilder) {
    }

  ngOnInit() {
    this.createForms();
  }

  //Obtiene información del backend
  loadOpenData() {
    this.posService.getOpenPosService().subscribe(
      (success) => {
        this.data = success;
        this.setDataOpen();
        this.dataOpenObject();
      }, 
      (error) => {}
    );
  }

  get formCtrls() {
    return this.createForm.controls;
  }

  createForms() {
    this.createForm = this.formBuilder.group({
      date_open: ['', Validators.required],
      hour_open: ['',  Validators.required],
      value_previous_close: ['',  Validators.required],
      value_open: ['',  Validators.required],
      observation: ['',  Validators.required]
    });
  }

  dataOpenObject(): any {
    return {
      date_open: this.formCtrls.date_open.value,
      hour_open: this.formCtrls.hour_open.value,
      value_previous_close: this.formCtrls.value_previous_close.value,
      value_open: this.formCtrls.value_open.value,
      observation: this.formCtrls.observation.value
    };
  }

  setDataOpen() {
    let data = this.data.results[0];
      this.formCtrls.date_open.setValue(data.date_open);
      this.formCtrls.hour_open.setValue(data.hour_open);
      this.formCtrls.value_previous_close.setValue(data.value_previous_close);
      this.formCtrls.value_open.setValue(data.value_open);
      this.formCtrls.observation.setValue(data.observation);
  }

  //Envia informacion al backend
  saveOpenData() {
    this.posService.saveOpenPosService(this.dataOpenObject()).subscribe(
      (sucess) => {
        this.results =sucess;
      },
      (error) => {}
    );
  }
}
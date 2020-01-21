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
  public createForm: FormGroup;
  private formData: FormData;

  constructor(private posService: PosServicesService,
                private formBuilder: FormBuilder) {
      this.formData = new FormData();
    }

  ngOnInit() {
    this.createForms();
  }

  loadOpenData() {
    this.posService.getOpenPosService().subscribe(
      (success) => {
        this.data = success;
      }, 
      (error) => {}
    );
  }

  saveOpenData() {
    let formData: FormData = new FormData;
    this.posService.saveOpenPosService(formData).subscribe(
      (sucess) => {},
      (error) => {}
    );
  }

  get formCtrls() {
    return this.createForm.controls;
  }

  createForms() {
    this.createForm = this.formBuilder.group({
      date_open: ['', Validators.required],
      hour_open: ['', Validators.required],
      value_previous_close: ['', Validators.required],
      value_open: ['', Validators.required],
      observation: [''],
    });
  }

  dataOpenObject():Object {
    return {
      date_open: this.formCtrls.date_open.value,
      hour_open: this.formCtrls.hour_open.value,
      value_previous_close: this.formCtrls.value_previous_close.value,
      value_open: this.formCtrls.value_open.value,
      observation: this.formCtrls.observation.value
    };
  }


}

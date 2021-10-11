import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    quantity: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(500)]),
    price: new FormControl(null, [Validators.required]),
    like: new FormControl(0, [Validators.required])
  });

  submitted: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  save() {
    this.submitted = true;
    if (this.form.valid) {
      alert("OK")
    } else {
      alert("invalid form");
      console.log(this.form.get('quantity')?.errors)
    }
    console.log(this.form.value);
  }

}

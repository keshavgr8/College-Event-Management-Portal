import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */ 

@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  private eventForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private http: HttpClient) {

    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      from: [null, Validators.required],
      to: [null, Validators.required],
      venue: ['', Validators.required],
      description: ['', Validators.required],
    });

  }
  
  private req;
  
  addEvent(){
    this.req = {
      title: this.eventForm.get('title').value,
      from: this.eventForm.get('from').value,
      to: this.eventForm.get('to').value,
      venue: this.eventForm.get('venue').value,
      description: this.eventForm.get('description').value,
      createdOn: Date.now(),
      updatedOn: Date.now(),
      createdBy: 'keshav',
      updatedBy: 'keshav',
    } 
    console.log(this.req);
    this.http.post('http://localhost:3000/api/events',this.req)
    .subscribe(
      val => console.log("POST call successful value returned in body", val),
      response => console.log("POST call in error", response),
      () => console.log("POST observable is now complete")

    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

}

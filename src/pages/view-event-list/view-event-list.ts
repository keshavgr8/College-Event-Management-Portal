import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ViewEventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-view-event-list',
  templateUrl: 'view-event-list.html',
})

export class ViewEventListPage {

  // events: Array<{ title: String, from: Date, to: Date, venue: String, description: String }>;
  events: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewEventListPage');
    this.http.get("http://localhost:3000/api/events").subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() { }

  toggleTheme() {
    const darkMode = document.body.classList.toggle('dark');

    localStorage.setItem('darkMode', darkMode ? 'on' : 'off');
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter HomePage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave HomePage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave HomePage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload HomePage');
  }



}

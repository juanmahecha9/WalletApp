import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  idNavigation: string;

  public uid: any;
  public linkForm: any;
  displayNavbar: string;
  constructor(public auth: AuthService,
    private router: Router) { }

  ngOnInit() {

    this.idNavigation = "/wallet/" + localStorage.getItem('id');

    this.displayNavbar = '1';

    $('#toggle-btn').on('click', function (e) {
      e.preventDefault();
      if ($(window).outerWidth() > 1000) {
        $('#toggle-btn').toggleClass('mobile-version-navbar-show');
      } else {
        $('nav.side-navbar').toggleClass('show-sm');
        $('#toggle-btn').toggleClass('mobile-version-navbar-show');
      }
    });

    this.uid = this.uuid();
    this.linkForm = "/form2data/" + this.uid;
  }

  toggleNavbar() {
    if (this.displayNavbar == '0') {
      this.displayNavbar = '1';
      //  alert(this.displayNavbar);
    } if (this.displayNavbar == '1') {
      //    alert("1 - Changing to 0");
      this.displayNavbar = '0';
    } else {
      this.displayNavbar = '1';
    }
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  cerrar() {
    this.auth.cerrarS();
    alert('Exit!...');
  }
}
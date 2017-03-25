import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) { }
  ngOnInit(){
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
          if (scroll >= 50) {
            $("#nav").addClass("darkNav");
            $('#navbarLeft').addClass('leftNavbar');
            $('#navbarRight').addClass('rightNavbar');
            $('#ITSA').addClass('itsa-logo');
          } else {
            $("#nav").removeClass("darkNav");
            $('#navbarLeft').removeClass('leftNavbar');
            $('#navbarRight').removeClass('rightNavbar');
            $('#ITSA').removeClass('itsa-logo');
          }
    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0,0)
    });
    }
}

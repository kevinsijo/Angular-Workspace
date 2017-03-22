import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

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
    }
}

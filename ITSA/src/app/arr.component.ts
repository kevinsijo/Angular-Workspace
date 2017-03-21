import {Component, OnInit, ElementRef} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-arr',
  template: `
    <ul class="nav pull-right scroll-top hidden-xs">
      <li><a [attr.href]="ref" tabindex="-1" title="Scroll to top"><i class="glyphicon glyphicon-chevron-up"></i></a></li>
    </ul>
  `,
  styles: []
})
export class ArrComponent implements OnInit {
  element: ElementRef;
  constructor(el: ElementRef) {
    this.element = el;
  }

  ngOnInit() {
    $(this.element.nativeElement).click(function () {
      $('.scroll-bottom').blur();
      $('body,html').animate({scrollTop: 20}, 1000);
    });

  }

}

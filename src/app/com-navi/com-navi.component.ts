import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-com-navi',
  templateUrl: './com-navi.component.html',
  styleUrls: ['./com-navi.component.css']
})
export class ComNaviComponent implements OnInit {

  fillerNav1 = [`Home`, `Recommend`];
  fillerNav2 = [`My Team`];
  fillerNav3 = [`Help`, `Opinion`, `Setup`, `Logout`];
  fillerNav4 = [`Team A`, `Team B`, `Team C`];
  fillerNav5 = [`Chatting`, `Meeting`, `화상회의`];
  open = false;

  constructor() { }

  ngOnInit() {
  }

  myTeamClick(a: any) {
    if ($('#icon').css('transform') === 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)') {
      $('#icon').css('transform', 'rotate(0deg)');
      $('a[name=group]').slideToggle('fast', function() {

      });
      this.open = true;
    } else {
      $('#icon').css('transform', 'rotate(90deg)');
      $('a[name=group]').slideToggle('fast', function() {

      });
      this.open = false;
    }
  }

}

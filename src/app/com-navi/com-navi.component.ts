import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-navi',
  templateUrl: './com-navi.component.html',
  styleUrls: ['./com-navi.component.css']
})
export class ComNaviComponent implements OnInit {

  fillerNav1 = [`Home`, `Recommend`];
  fillerNav2 = [`My Team`];
  fillerNav3 = [`Help`, `Opinion`, `Setup`, `Logout`];

  constructor() { }

  ngOnInit() {
  }

}

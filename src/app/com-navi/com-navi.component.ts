import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ComHeaderComponent} from '../com-header/com-header.component';
@Component({
  selector: 'app-com-navi',
  templateUrl: './com-navi.component.html',
  styleUrls: ['./com-navi.component.css']
})
export class ComNaviComponent implements OnInit {
  mobileQuery: MediaQueryList;

  fillerNav1 = [`Home`, `Recommend`];
  fillerNav2 = [`My Team`];
  fillerNav3 = [`Help`, `Opinion`, `Setup`, `Logout`];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

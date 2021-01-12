import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  heroes=['iron-man','venda','captan-marval'];
  master='MASTER';
  names = ['Dr IQ', '   ', '  Bombasto  '];
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
  agreed = 0;
  disagreed = 0;
  voters = ['other', 'bjp', 'aap'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}

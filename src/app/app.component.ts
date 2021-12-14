import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shivam-portfolio';
  constructor(iconRegistry : MatIconRegistry, sanitizer : DomSanitizer){

    iconRegistry.addSvgIcon(
      'facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/facebook.svg')
    );

      iconRegistry.addSvgIcon(
        'linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/linkedin.svg')
      );

      iconRegistry.addSvgIcon(
        'twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/twitter.svg')
      );
  }
}

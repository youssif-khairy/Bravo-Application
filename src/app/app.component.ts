import { Component } from '@angular/core';
import { faBars,faHeadset,faSearch} from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebookF,faFacebookMessenger,faYoutube,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faHeadset = faHeadset;
  faBars = faBars;
  faSearch = faSearch;
  faTwitter = faTwitter;
  faFacebook = faFacebookF;
  faFacebookMessenger = faFacebookMessenger;
  faYoutube = faYoutube;
  faLinkedin = faLinkedinIn;
  searchBarToggle = false;
  title = 'first-angular-app';
  toggleSearchBarFocus(){
    this.searchBarToggle = true;
  }
  toggleSearchBarUnFocus(){
    this.searchBarToggle = false;
  }
  
}

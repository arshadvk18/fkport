
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
document.body.classList.add('light-theme');

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));

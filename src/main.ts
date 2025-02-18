import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterComponent } from './app/components/register/register.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      ...routes,
      {path: 'register', component: RegisterComponent}
    ]),
    provideHttpClient(), provideAnimationsAsync()
  ],
  
}).catch(err => console.error(err));
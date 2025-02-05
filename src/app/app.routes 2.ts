import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard'; // Import the AuthGuard

export const routes: Routes = [
  {
    path: 'daily-diet-log',
    loadChildren: () =>
      import('./daily-diet-log/daily-diet-log.module').then(
        (m) => m.DailyDietLogModule
      ),
    canActivate: [AuthGuard], // Protect the lazy-loaded module
  },
  { path: 'login', component: LoginComponent }, // Add the login route
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirects root to 'login'
];
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideToastr({ timeOut: 5000, positionClass: 'toast-bottom-right', preventDuplicates: true, closeButton: true, progressBar: true, progressAnimation: 'increasing' }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()
  ]
};

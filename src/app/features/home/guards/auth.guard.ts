import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../../../core/modules/auth/services/auth.service';

export const authGuard: CanMatchFn = (route, segments) => {

  const authService: AuthService = inject(AuthService);

  return authService.isSignedIn()
    .pipe(
      map((currentUser) => currentUser.id > 0)
    )
};

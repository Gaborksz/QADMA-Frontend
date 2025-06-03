import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanMatchFn = (route, segments) => {

  const authService: AuthService = inject(AuthService);

  return authService.isSignedIn()
    .pipe(
      map((currentUser) => currentUser.id > 0)
    )
};

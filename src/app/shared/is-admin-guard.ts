import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StoreService } from './store.service';

// פונקציה שמחזירה אמת/שקר
// true - ניתן להיכנס לנתיב זה
// false - לא ניתן
export const isAdminGuard: CanActivateFn = (route, state) => {
  const ser = inject(StoreService);

  const router = inject(Router);

  if (!ser.isLoggedIn) {
    router.navigateByUrl('/');
  }

  return ser.isLoggedIn;
};

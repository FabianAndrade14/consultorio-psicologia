import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./components/page-services/page-services.component').then(m => m.PageServicesComponent)
    }
];

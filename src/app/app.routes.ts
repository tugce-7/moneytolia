import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignCreateComponent } from './campaign/campaign-create/campaign-create.component';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: '**', redirectTo: 'login' },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        loadComponent: () => import('./layout/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                redirectTo: 'campaigns',
                pathMatch: 'full'
            },
            {
                path: 'campaigns',
                component: CampaignComponent,
                canActivate: [authGuard]
            },
            {
                path: 'campaign-create',
                component: CampaignCreateComponent,
                canActivate: [authGuard]
            }
        ]
    }

];

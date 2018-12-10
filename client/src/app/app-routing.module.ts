// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { AreaEditComponent} from './pages/area-edit/area-edit.component';
import { AreaListComponent} from './pages/area-list/area-list.component';
import { CorsoEditComponent} from './pages/corso-edit/corso-edit.component';
import { CorsoListComponent} from './pages/corso-list/corso-list.component';
import { DipendenteEditComponent} from './pages/dipendente-edit/dipendente-edit.component';
import { DipendenteListComponent} from './pages/dipendente-list/dipendente-list.component';
import { EsameEditComponent} from './pages/esame-edit/esame-edit.component';
import { EsameListComponent} from './pages/esame-list/esame-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'areas/:id',  loadChildren: './pages/area-edit/area-edit.module#AreaEditModule' , canActivate: [AuthGuard] },
    { path: 'areas',  loadChildren: './pages/area-list/area-list.module#AreaListModule' , canActivate: [AuthGuard] },
    { path: 'corsos/:id',  loadChildren: './pages/corso-edit/corso-edit.module#CorsoEditModule' , canActivate: [AuthGuard] },
    { path: 'corsos',  loadChildren: './pages/corso-list/corso-list.module#CorsoListModule' , canActivate: [AuthGuard] },
    { path: 'dipendentes/:id',  loadChildren: './pages/dipendente-edit/dipendente-edit.module#DipendenteEditModule' , canActivate: [AuthGuard] },
    { path: 'dipendentes',  loadChildren: './pages/dipendente-list/dipendente-list.module#DipendenteListModule' , canActivate: [AuthGuard] },
    { path: 'esames/:id',  loadChildren: './pages/esame-edit/esame-edit.module#EsameEditModule' , canActivate: [AuthGuard] },
    { path: 'esames',  loadChildren: './pages/esame-list/esame-list.module#EsameListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

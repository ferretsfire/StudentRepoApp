import { Routes, RouterModule } from '@angular/router';

import { StudentListComponent } from './student-list.component';


const appRoutes: Routes = [
  { path: 'all', component: StudentListComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);

import { Routes } from '@angular/router';

import { HomeComponent } from '../../pages/home/home.component';
import { AuthGuard } from 'src/app/_helpers';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductDetailsComponent } from 'src/app/components/product-details/product-details.component';
import { ProductCreateComponent } from 'src/app/components/product-create/product-create.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',         component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
    { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
    { path: 'create', component: ProductCreateComponent, canActivate: [AuthGuard] }
];

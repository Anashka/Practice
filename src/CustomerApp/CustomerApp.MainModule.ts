import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MainRoutes } from './Routing/CustomerApp.MainRouting';
import { CustomerAppCustomerComponent } from '../CustomerApp/Customer/CustomerApp.CustomerComponent';
import { CustomerAppHomeComponent} from '../CustomerApp/Home/CustomerApp.HomeComponent';
import { CustomerAppSupplierComponent } from '../CustomerApp/Supplier/CustomerApp.SupplierComponent';
import { CustomerAppMasterpageComponent } from '../CustomerApp/Home/CustomerApp.MasterpageComponent';


@NgModule({
  declarations: [
    CustomerAppCustomerComponent,
    CustomerAppHomeComponent,
    CustomerAppSupplierComponent,
    CustomerAppMasterpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [CustomerAppMasterpageComponent]
})
export class CustomerModule { }

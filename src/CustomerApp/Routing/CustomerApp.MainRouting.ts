import { CustomerAppCustomerComponent } from "../Customer/CustomerApp.CustomerComponent";
import { CustomerAppHomeComponent } from "../Home/CustomerApp.HomeComponent";
import { CustomerAppSupplierComponent } from "../Supplier/CustomerApp.SupplierComponent";

export const MainRoutes = [
    {path: '', component: CustomerAppHomeComponent},
    {path: 'Home', component: CustomerAppHomeComponent},
    {path: 'Customer', component: CustomerAppCustomerComponent},
    {path: 'Supplier', component: CustomerAppSupplierComponent}
]
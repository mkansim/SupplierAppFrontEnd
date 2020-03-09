import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierFormComponent } from './supplier/supplier-form/supplier-form.component';
import { AppComponent } from './app.component';
import { SupplierDetailsComponent } from './supplier/supplier-details/supplier-details.component';
import { SearchResultComponent } from './supplier/supplier-details/search-result/search-result.component';

const routes: Routes = [
  {path: "addsupplier", component: SupplierFormComponent},
  {path: "supplierDetails", component:SupplierDetailsComponent},
  {path: "supplierSearchResult", component:SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

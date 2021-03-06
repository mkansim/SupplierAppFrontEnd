import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DataServiceService} from './services/data-service.service'
import { SupplierService } from './services/supplier.service';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import { from } from 'rxjs';
import { SupplierFormComponent } from './supplier/supplier-form/supplier-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule, Routes} from '@angular/router';
import { SupplierDetailsComponent } from './supplier/supplier-details/supplier-details.component';
import { SearchResultComponent } from './supplier/supplier-details/search-result/search-result.component'

@NgModule({
  declarations: [
    AppComponent,
    SupplierFormComponent,
    SupplierDetailsComponent,
    SearchResultComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule
    
    
  ],
  exports: [MatToolbarModule, MatFormFieldModule],
  providers: [SupplierService, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

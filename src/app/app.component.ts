import { Component } from '@angular/core';
import { SupplierService } from './services/supplier.service';
import { Supplier } from './models/supplier-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private service: SupplierService,
    private router:Router,
    private route: ActivatedRoute){}
  title = 'Supplier Admin Application';

  ngOnInit(){

  }

 

  searchSupplier(){
    this.router.navigate(['/supplierDetails']);
  }

  onAdd(){
    this.router.navigate(['/addsupplier']);
  }
}
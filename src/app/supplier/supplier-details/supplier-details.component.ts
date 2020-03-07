import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier-model';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  supplier:Supplier;
  supplierFound:any = false;
  constructor(private service: SupplierService) { }

  ngOnInit(): void {
  }

   searchSupplier(name:string): any{
    return this.service.getSupplier(name).subscribe(data => {
      this.supplier = data;
      this.supplierFound = true;
    });
  }

}

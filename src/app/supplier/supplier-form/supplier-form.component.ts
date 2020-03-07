import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier-model';
import { SupplierService } from 'src/app/services/supplier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {
  postData = {};
  constructor(private service: SupplierService) {}

  ngOnInit(): void {
  }

  addSupplier(name:string, phone:string): void{
    if(!name || !phone){return;}
    this.postData = {'Name':name, 'Phone':phone};
    this.service.addSupplier(this.postData).subscribe(result =>
      {
          alert(result);
      });
    
  }  

}

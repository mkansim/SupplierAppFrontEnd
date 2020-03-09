import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  supplierPhone: string;
  name: string;
  message:string;

  constructor(private dataService: DataServiceService, private service: SupplierService) { }

  ngOnInit(): void {

    try {
      this.message = this.dataService.getMessage();

        if (this.message !== '') {
          this.service.getSupplier(this.message).subscribe(data=> {
            this.name = 'Supplier Name : ' +  data.Name;
            this.supplierPhone = 'Supplier Telephone : ' + data.Phone;
        })
      };}
      catch (error) {
        console.error('Log error', error);
      }
      
  }

}

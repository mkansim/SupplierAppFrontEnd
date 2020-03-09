import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import {DataServiceService} from 'src/app/services/data-service.service';
import { Supplier } from 'src/app/models/supplier-model';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  httpdata;
  searchString: string = 'Paxi';
  message:string;
  name : string;
  name$ : string;
  supplierPhone:string;
  supplierPhone$:string;
  supplier:Supplier;
  supplier$:Observable<Supplier>;
  supplierFound:any = false;

  constructor(private dataService: DataServiceService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

  searchSupplier(name:string){
    this.dataService.changeMessage(name);
    this.router.navigate(['/supplierSearchResult']);;
  }
}

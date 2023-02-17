import { Component } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { RealTransferModel, TransferModel } from 'src/app/interfaces/transfer.model';
import { CustomerApiService } from '../../customer/services/customer-api.service';
import { TransferApiService } from '../services/transfer-api.service';

@Component({
  selector: 'app-list-transfer',
  templateUrl: './list-transfer.component.html',
  styleUrls: ['./list-transfer.component.scss']
})
export class ListTransferComponent {

  listAllTransfers: RealTransferModel[] = [];
  
  listCustomerTransfers: RealTransferModel[] = [];

  currentCustomer:CustomerModel = {
    id: '',
    documentType: {id:'', state: false, name:''},
    document: '',
    fullName: '',
    email: '',
    phone: 0,
    password: '',
    state: false
  };

  constructor(
    private transferApi: TransferApiService,
    private customerApi: CustomerApiService,
  ) {}

  ngOnInit(): void {
    this.transferApi.getAllTransfers().subscribe(transfers => {
      this.listAllTransfers = transfers as RealTransferModel[];

      this.customerApi.getCustomerById().subscribe(customer => {
        this.currentCustomer = customer;
        
        this.findCustomerTransfers();
      });
    });
    
  }

  convertDateToShow(dateNumber: number): string {
    let date = new Date(dateNumber as number);
    
    let dateYMD = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();

    let timeHMS = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();

    let dateFormated = dateYMD+" - "+timeHMS;	

    return dateFormated;
  }


  findCustomerTransfers() {
    this.listCustomerTransfers = this.listAllTransfers.filter(transfer =>
      transfer.income.customer.id === this.currentCustomer.id
      || transfer.outcome.customer.id === this.currentCustomer.id
    );
  }

}
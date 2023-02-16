import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataRangeModel } from 'src/app/interfaces/data-range.model';
import { PaginationModel } from 'src/app/interfaces/pagination.model';
import { TransferModel } from 'src/app/interfaces/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferApiService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };

  constructor(
    private http: HttpClient,
  ) { }

  getAllTransfers(pagination?: PaginationModel): Observable<TransferModel[]>{
    return this.http
    .get<TransferModel[]>('http://localhost:3000/transfer/', this.options);
  }
  
  getTransferById(transferId: string): Observable<TransferModel>{
    return this.http
    .get<TransferModel>('http://localhost:3000/transfer/'+transferId, this.options);
  }

  getAccountTransfers(accountId: string, datarange?: DataRangeModel, pagination?: PaginationModel): Observable<TransferModel[]>{
    return this.http
    .get<TransferModel[]>('http://localhost:3000/transfer/account/'+accountId, this.options);
  }

  getAccountInTransfers(accountId: string, datarange?: DataRangeModel, pagination?: PaginationModel): Observable<TransferModel[]>{
    return this.http
    .get<TransferModel[]>('http://localhost:3000/transfer/in/'+accountId, this.options);
  }

  getAccountOutTransfers(accountId: string, datarange?: DataRangeModel, pagination?: PaginationModel): Observable<TransferModel[]>{
    return this.http
    .get<TransferModel[]>('http://localhost:3000/transfer/out/'+accountId, this.options);
  }
  
  getTransfersOutcomeByDataRange(idOutcome: string, dateInit: number, dateEnd: number): Observable<TransferModel[]>{
    return this.http
    .get<TransferModel[]>('http://localhost:3000/transfer/out/'+idOutcome+'/'+dateInit+'/'+dateEnd, this.options);
  }
  
  getTransfersIncomeByDataRange(idIncome: string, dateInit: number, dateEnd: number): Observable<TransferModel[]>{
    return this.http
    .get<TransferModel[]>('http://localhost:3000/transfer/in/'+idIncome+'/'+dateInit+'/'+dateEnd, this.options);
  }

  
  
  
  postTransfer(transfer: TransferModel): void {
    this.http.
    post<TransferModel>('http://localhost:3000/transfer/', transfer, this.options)
    .subscribe(transfer => transfer );
  }
  
  
  
  

  //   @Delete(':id')
  //   deleteTransfer(@Param('id', ParseUUIDPipe) id: string): string {
  //       return this.transferService.deleteTransfer(id);
  //   }

  //   @Patch(':id/soft')
  //   softDeleteTransfer(@Param('id', ParseUUIDPipe) id: string): string {
  //       return this.transferService.softDeleteTransfer(id);
  //   }

  //   @Put(':id')
  //   @UsePipes(new ValidationPipe())
  //   updateTransfer(
  //       @Param('id', ParseUUIDPipe)id: string,
  //       @Body() transfer: UpdateTransferDto): TransferEntity {
  //       return this.transferService.updateTransfer(id, transfer);
  //   }

  //   @Patch(':id')
  //   @UsePipes(new ValidationPipe())
  //   updateTransferSomeProperties(
  //       @Param('id', ParseUUIDPipe)id: string,
  //       @Body() transfer: UpdateTransferDto): TransferEntity {
  //       return this.transferService.updateTransfer(id, transfer);
  //   }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getTransfers(): void {}

  postTransfer(transfer: TransferModel): void {
    this.http.
    post<TransferModel>('http://localhost:3000/transfer/', transfer, this.options)
    .subscribe(transfer => transfer );

    this.getTransfers();
  }

}

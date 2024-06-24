import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AccountService } from './service/planPagos.service';
import { ResponseData, DatosEntrada, DatosSalida } from './model/responseData.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NavbarComponent } from "../../public/components/navbar/navbar.component";
import { SessionStorageService } from '../../shared/services/session-storage.service';

@Component({
    selector: 'app-plan-pagos',
    templateUrl: './plan-pagos.component.html',
    styleUrls: ['./plan-pagos.component.css'],
    standalone: true,
    imports: [CommonModule, DatePipe, NavbarComponent]
})
export class PlanPagosComponent implements OnInit {
  datosEntrada: DatosEntrada | undefined;
  datosSalidaList: DatosSalida[] = [];
  accountId : number = 0;
  totalInteresMoratorio: number = 0;

  constructor(
    private accountService: AccountService,
    private sessionStorageService: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.accountId = this.sessionStorageService.getItem('accountId');
    this.getAccount(this.accountId);
    this.getTotalInteresMoratorio(this.accountId);
  }

  getAccount(id: number): void {
    this.accountService.getAccountById(id).subscribe(
      (data: ResponseData) => {
        this.datosEntrada = data.datosEntrada;
        this.datosSalidaList = data.datosSalidaList;
        console.log(this.datosEntrada);
        console.log(this.datosSalidaList);
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
  getTotalInteresMoratorio(id: number): void {
    this.accountService.getTotalInteresMoratorio(id).subscribe(
      (total: number) => {
        this.totalInteresMoratorio = total;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
}

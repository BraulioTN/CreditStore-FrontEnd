import { FormClientAccountComponent } from '../../../clients/components/form-client-account/form-client-account.component';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CurrencyPipe, DecimalPipe, CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { Client } from '../../models/client.model';
import { NavbarComponent } from "../../../../public/components/navbar/navbar.component";
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SessionStorageService } from '../../../../shared/services/session-storage.service';
import { UserService } from '../../../clients/services/user.service';
import { UserReq } from '../../../clients/models/user-req';
import { User } from '../../../auth/models/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, AsyncPipe, CurrencyPipe, DecimalPipe, NavbarComponent]
})
export class HomePageComponent implements OnInit {
  clients: Client[] = [];
  interest: number = 0;
  usuario?: User;
  userId?: string;

  constructor(private homeService: HomeService, private router: Router,
    private modalService: NgbModal, private sessionStorageService: SessionStorageService,
    private userService: UserService

  ) { }

  ngOnInit(): void {
    this.userId = this.sessionStorageService.getItem('userId');
    this.findUser();
  }

  findUser(): void {
    this.userService.getUserById(this.userId!).subscribe({
      next: (user) => {
        this.usuario = user;
      }
    });
  }

  navigateToAddAccount() {
    this.router.navigate(['/add-account']);
  }
  navigateToAddClient() {
    this.router.navigate(['/add-client']);
  }

  openFormClientAccount(): void {
    const modalRef: NgbModalRef = this.modalService.open(FormClientAccountComponent,
      { size: 'lg', centered: true, backdrop: 'static' });
  }

}

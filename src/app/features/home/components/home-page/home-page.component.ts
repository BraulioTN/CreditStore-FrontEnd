import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AsyncPipe, CurrencyPipe, DecimalPipe]
})
export class HomePageComponent implements OnInit {
  clients: Client[] = [];
  interest: number = 0;
  username: string = '';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getClients();
    this.getInterest();
    this.getUsername();
  }

  getClients(): void {
    this.homeService.getClients().subscribe(
      clients => this.clients = clients
    );
  }

  getInterest(): void {
    this.homeService.getInterest().subscribe(
      interest => this.interest = interest
    );
  }

  getUsername(): void {
    this.homeService.getUsername().subscribe(
      username => this.username = username
    );
  }
}

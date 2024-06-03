import { Component } from '@angular/core';
import {LogoScreenComponent} from "../../../../public/components/logo-screen/logo-screen.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-recover-password-page',
  standalone: true,
  imports: [LogoScreenComponent, MatFormFieldModule, MatButtonModule, MatInputModule, RouterModule],
  templateUrl: './recover-password-page.component.html',
  styleUrl: './recover-password-page.component.css'
})
export class RecoverPasswordPageComponent {

}

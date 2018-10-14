import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressCardComponent } from './address-card/address-card.component';
import { User } from '../models/user.model';
import { AddressComponent } from './address.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddressComponent,
    AddressCardComponent
  ],
  exports : [
    AddressComponent,
    AddressCardComponent
  ]
})
export class AddressModule { }

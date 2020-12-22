import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CreateFidoComponent } from './create-fido/create-fido.component';
import { FidoFetcherComponent } from './fido-fetcher/fido-fetcher.component';
import { FidoService } from './fido.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ItemComponent,
    CreateFidoComponent,
    FidoFetcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

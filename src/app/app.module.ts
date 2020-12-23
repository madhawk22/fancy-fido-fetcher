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
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FetchPageComponent } from './fetch-page/fetch-page.component';


const routes = [
  { path: 'fidos', component: ListComponent},
  { path: 'fetch-fido', component: FetchPageComponent},
  { path: '**', redirectTo:'/fidos'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ItemComponent,
    CreateFidoComponent,
    FidoFetcherComponent,
    FetchPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

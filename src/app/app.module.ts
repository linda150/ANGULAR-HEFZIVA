import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
/* ReactiveFormsModule:Formularios reactivos, son formularios que responden a las interacciones del usuario. */
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent} from "./Components/home/home.component";
import { ProductsComponent } from './Components/products/products.component';
import { MeetusComponent } from './Components/meetus/meetus.component';


const routesApp: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'meetus', component: MeetusComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    MeetusComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

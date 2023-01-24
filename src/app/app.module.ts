import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AdminComponent],
  imports: [BrowserModule, AuthModule , AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

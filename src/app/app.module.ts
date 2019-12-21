// Main Section
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Component Section
import { AppComponent } from './app.component';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { RegisterFormComponent } from './_component/register-form/register-form.component';
import { ProfileComponent } from './_component/profile/profile.component';

// Access TOKEN JWT
import { AuthInterceptor } from './_service/auth.interceptor';

// Widget Section
import {NgxPaginationModule} from 'ngx-pagination';

// Persian Language Section
import { ShamsiPipe } from './_pipe/shamsi.pipe';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterFormComponent,
    ProfileComponent,
    ShamsiPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    DpDatePickerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

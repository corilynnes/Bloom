import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { PlantFormComponent } from './components/plant-form/plant-form.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './Shared/services/auth.service';
import { AuthGuard } from './Shared/guard/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import firebase from "firebase/app";
import { WishlistListComponent } from './components/wishlist-list/wishlist-list.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './Shared/Directives/dropdown.directive';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'plant-form', component: PlantFormComponent, canActivate: [AuthGuard]},
  { path: 'plant-list', component: PlantListComponent, canActivate: [AuthGuard] },
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
  { path: 'wishlist-list', component: WishlistListComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    PlantFormComponent,
    PlantListComponent,
    WishlistComponent,
    WishlistListComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
   AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    ReactiveFormsModule,
    
  ],
  
  exports: [RouterModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

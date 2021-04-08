import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(  public authService: AuthService,
    public router:Router,
    public ngZone: NgZone) { }

  ngOnInit(): void {
  }
  collapsed = true;
}

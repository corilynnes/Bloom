import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { PlantProfile } from 'src/app/Shared/plant_profile.model';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { PlantlistService } from 'src/app/Shared/services/plantlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  uid: any;
  plantList: PlantProfile[];
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private plservice: PlantlistService, private fireStore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.uid = JSON.parse(localStorage.getItem('user')).uid;

    this.plservice.getPlantList().subscribe(response => {
      this.plantList = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
        } as PlantProfile;
      })
 
    });
  }

}

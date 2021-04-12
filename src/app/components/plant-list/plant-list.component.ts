import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlantProfile } from 'src/app/Shared/plant_profile.model';
import { PlantlistService } from 'src/app/Shared/services/plantlist.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.sass']
})
export class PlantListComponent implements OnInit {
  deleteMessage: string;
  uid: any;
  plantList: PlantProfile[];
  constructor(private plservice: PlantlistService, private fireStore: AngularFirestore) { }
 
  ngOnInit() {
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
 
  onEdit(plant: PlantProfile) {
    this.plservice.formData = Object.assign({}, plant);
  }
 
  onDelete(plant: PlantProfile) {
    this.fireStore.doc('users/'+ this.uid +'/plantList/' +plant.id).delete();
    this.deleteMessage = plant.commonName + ' has been removed from your list';
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlantProfile } from 'src/app/Shared/plant_profile.model';
import { DataStorageService } from 'src/app/Shared/services/data-storage.service';



@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.sass'],
  providers: [DataStorageService]
})
export class PlantFormComponent implements OnInit {
  @ViewChild('f', { static: false }) plantList: NgForm;
  userJungle = [];
 
 
   constructor(private dataStorageService: DataStorageService) {
 
   }
 
   ngOnInit(): void {
   
  
 
   }
 
 
   onAddPlant() {
  //  this.userJungle = JSON.parse(localStorage.get("plants"));

     const commonName = this.plantList.value.plantData.commonName;
     const scientificName = this.plantList.value.plantData.scientificName;
     const light = this.plantList.value.plantData.light;
     const water = this.plantList.value.plantData.water;
     
     const notes = this.plantList.value.plantData.notes;
     const waterDate = this.plantList.value.plantData.waterDate;
     const newPlant = new PlantProfile(commonName, scientificName, light, water, notes, waterDate);
    this.userJungle.push(newPlant);
    this.dataStorageService.storePlant("plants", JSON.stringify(this.userJungle));
    this.plantList.reset();
    console.log (this.userJungle);
   }
 
}

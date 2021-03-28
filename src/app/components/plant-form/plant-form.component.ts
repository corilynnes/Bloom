import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlantProfile } from 'src/app/Shared/plant_profile.model';



@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.sass']
})
export class PlantFormComponent implements OnInit {
  @ViewChild('f', { static: false }) plantList: NgForm;
  userJungle = [];
 
 
   constructor() {
 
   }
 
   ngOnInit(): void {
   
  
 
   }
 
 
   onAddPlant() {
   
     const commonName = this.plantList.value.plantData.commonName;
     const scientificName = this.plantList.value.plantData.scientificName;
     const light = this.plantList.value.plantData.light;
     const water = this.plantList.value.plantData.water;
     const waterDate = this.plantList.value.plantData.waterDate;
     const notes = this.plantList.value.plantData.notes;
     const newPlant = new PlantProfile(commonName, scientificName, light, water, waterDate, notes);
    this.userJungle.push(newPlant);
    this.plantList.reset();
    console.log (this.userJungle);
   }
 
}

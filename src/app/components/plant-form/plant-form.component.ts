import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { PlantProfile } from 'src/app/Shared/plant_profile.model';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { DataStorageService } from 'src/app/Shared/services/data-storage.service';
import { PlantlistService } from 'src/app/Shared/services/plantlist.service';



@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.sass'],
  providers: [DataStorageService]
})


export class PlantFormComponent implements OnInit {
  // @ViewChild('f', { static: false }) plantList: NgForm;
  // userJungle = [];
  uid: any;
  message: string;

  constructor(
    public plservice: PlantlistService,
    public authService: AuthService,
    private fireStore: AngularFirestore,
    public afAuth: AngularFireAuth,) {

  }

  ngOnInit() {

    this.resetForm();
    this.uid = JSON.parse(localStorage.getItem('user')).uid;

  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.plservice.formData = {
      id: null,
      commonName: '',
      scientificName: '',
      light: '',
      water: '',
      notes: '',
      waterDate: ''
    }
  }


    onSubmit(form: NgForm) {
      // Reset the message value.
      
      this.message = '';

      // Making the copy of the form and assigning it to the wishlistData.
      let plantlistData = Object.assign({}, form.value);
    
      // To avoid messing up the document id and just update the other details of the wishlist. We will remove the 'property' from the plantlist data.
      delete plantlistData.id;

      // Does the insert operation.
      if (form.value.id == null) {

        this.fireStore.collection('users/' + this.uid + '/plantlist').add(plantlistData);
        this.message = 'Your plant list is successfully saved!';
      } else {
        // Does the update operation for the selected plant.
        // The 'plantlistData' object has the updated details of the plant.
        this.fireStore.doc('users/' + this.uid + '/plantlist' + form.value.id).update(plantlistData);
        this.message = 'Your plant list successfully updated!';
      }

      // Reset the form if the operation is successful.
      this.resetForm(form);
    }
  }


      //  onAddPlant() {

    // const id = this.plantList.value.plantData.id;
    //    const commonName = this.plantList.value.plantData.commonName;
    //    const scientificName = this.plantList.value.plantData.scientificName;
    //    const light = this.plantList.value.plantData.light;
    //    const water = this.plantList.value.plantData.water;

    //    const notes = this.plantList.value.plantData.notes;
    //    const waterDate = this.plantList.value.plantData.waterDate;
    //    const newPlant = new PlantProfile(id, commonName, scientificName, light, water, notes, waterDate);



    //   this.userJungle.push(newPlant);
    //   this.dataStorageService.storePlant("plants", JSON.stringify(this.userJungle));
    //   this.plantList.reset();
    //   console.log (this.userJungle);
    //  }




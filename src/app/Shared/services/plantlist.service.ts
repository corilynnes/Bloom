import { Injectable } from '@angular/core';
 

import { AngularFirestore } from '@angular/fire/firestore';
import { PlantProfile } from '../plant_profile.model';
 
@Injectable({
  providedIn: 'root'
})
 
export class PlantlistService {
 
  constructor(private fireStore: AngularFirestore) { }
 
  // Plant list form data.
  formData: PlantProfile;
 
  // Fetch all plant list plant information.
  getPlantList() {
    // valueChanges() function returns the observable containing the plant list  details expect the id of the document.
    // snapshotChanges() function returns the observable containing the palnt list details and the id of the document (i.e. the metadata).
    const uid = JSON.parse(localStorage.getItem('user')).uid;
     return this.fireStore.collection('users/'+ uid +'/plantlist').snapshotChanges();
 
    // We will use the id in order to perform the update or delete operation.
  }
}
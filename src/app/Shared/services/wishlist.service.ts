import { Injectable } from '@angular/core';
 

import { AngularFirestore } from '@angular/fire/firestore';
import { WishListPlant } from '../wishlist_plant.model';
 
@Injectable({
  providedIn: 'root'
})
 
export class WishlistService {
 
  constructor(private fireStore: AngularFirestore) { }
 
  // Wishlist form data.
  formData: WishListPlant;
 
  // Fetch all wishlist plant information.
  getWishlist() {
    // valueChanges() function returns the observable containing the wishlist  details expect the id of the document.
    // snapshotChanges() function returns the observable containing the wishlist details and the id of the document (i.e. the metadata).
    const uid = JSON.parse(localStorage.getItem('user')).uid;
     return this.fireStore.collection('users/'+ uid +'/wishlist').snapshotChanges();
 
    // We will use the id in order to perform the update or delete operation.
  }
}
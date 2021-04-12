import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { WishlistService } from 'src/app/Shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {
  // @ViewChild('f', { static: false }) plantList: NgForm;
  // userWishlist = [];
  uid: any;
 
  message: string;
  constructor(
    public wlservice: WishlistService, 
    public authService: AuthService, 
    private fireStore: AngularFirestore,
    public afAuth: AngularFireAuth,
    
  )
    { 
      
    }
 
  ngOnInit() {
    this.resetForm();
    this.uid = JSON.parse(localStorage.getItem('user')).uid;
   
  }
 
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.wlservice.formData = {
      id: null,
     name:''
    }
  }
 
  onSubmit(form: NgForm) {
    // Reset the message value.
    this.message = '';
 
    // Making the copy of the form and assigning it to the wishlistData.
    let wishlistData = Object.assign({}, form.value);
 
    // To avoid messing up the document id and just update the other details of the wishlist. We will remove the 'property' from the wishlist data.
    delete wishlistData.id;
 
    // Does the insert operation.
    if (form.value.id == null) {
      
      this.fireStore.collection('users/'+ this.uid +'/wishlist').add(wishlistData);
      this.message = 'You wishlist is successfully saved!';
    } else {
      // Does the update operation for the selected plant.
      // The 'wishlistData' object has the updated details of the plant.
      this.fireStore.doc('users/'+ this.uid +'/wishlist' + form.value.id).update(wishlistData);
      this.message = 'Your wishlist successfully updated!';
    }
 
    // Reset the form if the operation is successful.
    this.resetForm(form);
  }
}
 
 

 
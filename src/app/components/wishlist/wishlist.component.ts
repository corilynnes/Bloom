import { Component, OnInit, ViewChild } from '@angular/core';
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
  message: string;
  constructor(public service: WishlistService, private fireStore: AngularFirestore) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
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
      this.fireStore.collection('wishlist').add(wishlistData);
      this.message = 'You wishlist is successfully saved!';
    } else {
      // Does the update operation for the selected plant.
      // The 'wishlistData' object has the updated details of the plant.
      this.fireStore.doc('wishlist/' + form.value.id).update(wishlistData);
      this.message = 'Your wishlist successfully updated!';
    }
 
    // Reset the form if the operation is successful.
    this.resetForm(form);
  }
}
 
 
  //  onAddPlant() {
   
  //    const commonName = this.plantList.value.plantData.commonName;
     
  //   this.userWishlist.push(commonName);


  //   this.plantList.reset();
  //   console.log (this.userWishlist);
  //  }
 
 
 
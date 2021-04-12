import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { WishlistService } from 'src/app/Shared/services/wishlist.service';
import { WishListPlant } from 'src/app/Shared/wishlist_plant.model';


@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.sass']
})
export class WishlistListComponent implements OnInit {
  deleteMessage: string;
  uid: any;
  wishlist: WishListPlant[];
  constructor( public afAuth: AngularFireAuth, private service: WishlistService, private fireStore: AngularFirestore) { }
 
  ngOnInit() {
  
    this.uid = JSON.parse(localStorage.getItem('user')).uid;
    
    this.service.getWishlist().subscribe(response => {
      this.wishlist = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
        } as WishListPlant;
        
      })
 
     
    });
  }
 
  // onEdit(wishlistPlant: WishListPlant) {
  //   this.service.formData = Object.assign({}, wishlistPlant);
  // }
 
  onDelete(wishlistPlant: WishListPlant) {
    this.fireStore.doc('users/'+ this.uid +'/wishlist/' + wishlistPlant.id).delete();
    this.deleteMessage = wishlistPlant.name + ' has been removed from wishlist!';
  }

}

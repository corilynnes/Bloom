import { Component, OnInit } from '@angular/core';
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
  wishlist: WishListPlant[];
  constructor(private service: WishlistService, private fireStore: AngularFirestore) { }
 
  ngOnInit() {
    this.service.getWishlist().subscribe(response => {
      this.wishlist = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
        } as WishListPlant;
      })
 
      // // Sorting the student-list in ascending order.
      // this.wishlist = this.wishlist.sort((obj1, obj2) => (obj1 as any).rollNo - (obj2 as any).rollNo);
    });
  }
 
  // onEdit(wishlistPlant: WishListPlant) {
  //   this.service.formData = Object.assign({}, wishlistPlant);
  // }
 
  onDelete(wishlistPlant: WishListPlant) {
    this.fireStore.doc('wishlist/' + wishlistPlant.id).delete();
    this.deleteMessage = 'Plant removed from wishlist!';
  }

}

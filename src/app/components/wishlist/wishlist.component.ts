import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {
  @ViewChild('f', { static: false }) plantList: NgForm;
  userWishlist = [];
 
 
   constructor() {
 
   }
 
   ngOnInit(): void {
   
  
 
   }
 
 
   onAddPlant() {
   
     const commonName = this.plantList.value.plantData.commonName;
     
    this.userWishlist.push(commonName);
    this.plantList.reset();
    console.log (this.userWishlist);
   }
 
 
 }
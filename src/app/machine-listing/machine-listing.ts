import { Component, OnInit, ViewChild, Injectable, Output, EventEmitter, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'machine-listing',
  templateUrl: './machine-listing.html',
  styleUrls: ['./machine-listing.scss'],
 
})
export class MachineListing implements OnInit {
 @Input("listing") listing: any;
 @Input("listingHeaders") listingHeaders: any;
 visbilityTray = {
   
 };
  


  constructor() {
  
  }

  ngOnInit() {

    console.log('MACHINE listing', this.listing);
    this.setVisibilityTray();
    
  }
  setVisibilityTray() {
    let new_obj = {};

     _.forEach(this.listingHeaders.schema.fields, field => {
       new_obj[field.fieldid]= field.visible

     });
     this.visbilityTray = new_obj;
     console.log("visbilityTray", this.visbilityTray);
  }

  setHome(navitem: string){
     // alert (navitem);

   
  }
 


}

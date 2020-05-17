import {
  Component,
  OnInit,
  ViewChild,
  Injectable,
  Output,
  EventEmitter,
  Input
} from "@angular/core";
import * as _ from "lodash";
import mapValues = require("lodash/mapValues");

@Component({
  selector: "machine-listing",
  templateUrl: "./machine-listing.html",
  styleUrls: ["./machine-listing.scss"]
})
export class MachineListing implements OnInit {
  @Input("listing") listing: any;
  @Input("listingHeaders") listingHeaders: any;
  visbilityTray = {};

  columnOrderList = {};

  productList = [];
  pObj : any;

  constructor() {}

  ngOnInit() {
    console.log("MACHINE listing", this.listing);
    //this.pObj.assign(this.listing);
    this.setObj();
    this.setVisibilityTray();
    this.setColumnOrder();
  }
  setObj(){
    this.pObj = this.listing;
  }
  setColumnOrder() {
    this.listing.forEach(productObj => {
     
      let new_obj = new Map();
    

      _.forEach(this.listingHeaders.schema.fields, field => {
        
        if (productObj[field.fieldid] !== undefined)
          new_obj.set(field.fieldid, productObj[field.fieldid]);
      });
      //new_obj.set('products',productObj[products] )
      this.productList.push(new_obj);
    });
    
    // for (let [key, value] of this.productList[0].entries()) {
    //   console.log(key, value);
    // }
  
  }

  search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
        return myArray[i];
      }
    }
  }

  setVisibilityTray() {
    let new_obj = {};
    _.forEach(this.listingHeaders.schema.fields, field => {
      new_obj[field.fieldid] = field.visible;
    });
    this.visbilityTray = new_obj;
    // console.log("visbilityTray", this.visbilityTray);
  }

  setHome(navitem: string) {
    // alert (navitem);
  }

  getProductListingCard(record){
let mcid;
//  for (let [key, value] of record.entries()) {
//       console.log('hello', key, value);
//       if(key==='id')
//       mcid= value;
//     }
   mcid=record.get("id");
   console.log('mcid', mcid);


    console.log('record', record, this.pObj);
      //  let tmpProduct = this.listing.products._.find(product => {
      //                           return product.id == record.id;
      //                       });
     let inProgress = _.find(this.pObj, (status)=> {return status.id==mcid});   
       console.log('inProgress', inProgress);                      
  }

  asIsOrder(a, b) {
  return 1;
}
}

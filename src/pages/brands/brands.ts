import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { UserProvider } from '../../providers/user-provider/user-provider';
import { BrandProvider } from '../../providers/brand-provider/brand-provider';

/*
  Generated class for the BrandsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'brands.html',
})
export class BrandsPage {

  search: {text?:string,email?:string} = {};
  brands = [];
  brandObj: {brandid?: string,email?: string} = {};

  constructor(public navCtrl: NavController,
  public brandProvider: BrandProvider,
  public userProvider:UserProvider,
  public loadingCtrl: LoadingController
  )
  {
    this.GetBrands();
  }

  GetBrands(){
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading data...'
    });

    loadingPopup.present();

    this.brandProvider.GetBrands().subscribe(
        data => {
          console.log(data.result);
          this.brands = data.result;
          loadingPopup.dismiss();

         //_.filter(data.result, {likes: [{email: this.user.email}] });
        },
        err => {
          loadingPopup.dismiss();
          console.log(err);

      },
      () => {
        console.log('Pulling data');
        loadingPopup.dismiss();
      }
    )
  }

  likeBrand(brand){
    console.log(brand);
     let loadingPopup = this.loadingCtrl.create({
      content: 'Loading data...'
    });

    loadingPopup.present();

    this.brandObj.brandid = brand._id;
    this.brandObj.email = this.userProvider.GetLocalObject('user');

    this.brandProvider.LikeBrand(this.brandObj).subscribe(
      data =>{
        console.log(data.result);
      },
      err => {

      },
      () => {

      }

      )
  }

  searchCampaigns(){

  }

  onCancel(event){

  }

  onBlur(event){

  }
}

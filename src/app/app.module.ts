import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BrandsPage } from '../pages/brands/brands';
import { CommentsPage } from '../pages/comments/comments';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SparksPage } from '../pages/sparks/sparks';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { VerifyPage } from '../pages/verify/verify';
import { TrendingPage } from '../pages/trending/trending';

import { BrandProvider } from '../providers/brand-provider/brand-provider';
import { CampaignProvider } from '../providers/campaign-provider/campaign-provider';
import { ServiceProvider } from '../providers/service-provider/service-provider';
import { UserProvider } from '../providers/user-provider/user-provider';

import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BrandsPage,
    CommentsPage,
    FavoritesPage,
    LoginPage,
    SignupPage,
    SparksPage,
    TutorialPage,
    VerifyPage,
    TrendingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SparksPage,
    BrandsPage,
    CommentsPage,
    FavoritesPage,
    LoginPage,
    SignupPage,
    TutorialPage,
    VerifyPage,
    TrendingPage
  ],
  providers: [BrandProvider,CampaignProvider,ServiceProvider, UserProvider, Storage]
})
export class AppModule {}

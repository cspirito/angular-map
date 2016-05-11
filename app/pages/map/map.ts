import { Page, NavController, NavParams } from 'ionic-angular';
import { GoogleMap } from '../../components/google-map';
import { ANGULAR2_GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

/*
  Generated class for the MapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/map/map.html',
  directives: [GoogleMap],
  providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})
export class MapPage {
	latitude: number;
	longitude: number;
	constructor(private nav: NavController, navParams: NavParams) {
		this.latitude = 51.528308;
		this.longitude = -0.3817765;
	}
}

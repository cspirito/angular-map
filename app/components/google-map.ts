import {Component, Input} from 'angular2/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
	selector: 'google-map',
	directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
	styles: [`
	    .sebm-google-map-container {
	      height: 100%;
	    }`
  	],
	template: `
		<sebm-google-map 
	      [latitude]="lat"
	      [longitude]="lng"
	      [zoom]="zoom"
	      [zoomControl]="false"
	      [disableDefaultUI]="true"
	      [draggableCursor]="false"
	      [disableDoubleClickZoom]="true"
	      [draggable]="false"
	      (mapClick)="mapClicked($event)">
	    
	      <sebm-google-map-marker 
	        *ngFor="#m of markers; #i = index"
	        (markerClick)="clickedMarker(m.label, i)"
	        [latitude]="m.lat"
	        [longitude]="m.lng"
	        [label]="m.label"
	        [markerDraggable]="m.draggable"
	        (dragEnd)="markerDragEnd(m, $event)"></sebm-google-map-marker>
	    
	    </sebm-google-map>`
})

export class GoogleMap {
	isShowMarker: boolean = false;
	isReadOnly: boolean = false;
	lat: number = 51.528308;
	lng: number = -0.3817765;
	zoom: number = 15;

	@Input() set showMarker(showMarker: boolean) {
		this.isShowMarker = showMarker || this.isShowMarker;
	}

	@Input() set readOnly(readOnly: boolean) {
		this.isReadOnly = readOnly || this.isReadOnly;
	}

	@Input() set latitude(latitude: number) {
		this.lat = latitude || this.lat;
	}

	@Input() set longitude(longitude: number) {
		this.lng = longitude || this.lng;
	}

	@Input() set zoomSize(zoomSize: number) {
		this.zoom = zoomSize || this.zoom;
	}

	clickedMarker(label: string, index: number) {
		// window.alert(`clicked the marker: ${label || index}`)
		// this.markers.splice(index, 1);
	}


	mapClicked($event: MouseEvent) {
		// this.markers.push({
		// 	lat: $event.coords.lat,
		// 	lng: $event.coords.lng
		// });
	}

	mapDragged($event: MouseEvent) {
		// console.log($event);
	}

	markerDragEnd(m: marker, $event: MouseEvent) {
		// 	console.log('dragEnd', m, $event);
	}

	markers: marker[] = [
		{
			lat: this.lat,
			lng: this.lng,
			label: 'A',
			draggable: false
		}
	]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
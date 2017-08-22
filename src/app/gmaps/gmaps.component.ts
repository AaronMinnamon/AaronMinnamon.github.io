import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnInit {

  lat = 43.16103;
  lng = -77.6109219;
  mapStylesLight = [
    {
      "featureType": "water",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#b5cbe4"
        }
      ]
    },
    {
      "featureType": "landscape",
      "stylers": [
        {
          "color": "#efefef"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#83a5b0"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#bdcdd3"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e3eed3"
        }
      ]
    },
    {
      "featureType": "administrative",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "lightness": 33
        }
      ]
    },
    {
      "featureType": "road"
    },
    {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "lightness": 20
        }
      ]
    },
    {},
    {
      "featureType": "road",
      "stylers": [
        {
          "lightness": 20
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

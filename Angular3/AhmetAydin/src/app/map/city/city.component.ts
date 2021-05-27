import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  citiesData:any;
  citiesData$:any;
  constructor(private mapService:MapService) {
    //mapService.cityNameSubject.subscribe(data=>{
    //  this.citiesData=data;
    //});
    this.citiesData$=mapService.cityNameDataSubject;
   }

  ngOnInit(): void {
    this.mapService.getCityNames();
  }

}

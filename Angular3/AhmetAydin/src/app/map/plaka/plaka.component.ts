import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-plaka',
  templateUrl: './plaka.component.html',
  styleUrls: ['./plaka.component.css']
})
export class PlakaComponent implements OnInit {
  plakaData:any;
  constructor(private mapService:MapService) {
    mapService.cityPlakaSubject.subscribe(data=>{
      this.plakaData=data;
    });
  }

  ngOnInit(): void {
    this.mapService.getCityPlakas();
  }
}
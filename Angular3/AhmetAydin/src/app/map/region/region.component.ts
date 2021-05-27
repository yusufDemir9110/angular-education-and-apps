import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regionData:any;
  constructor(private mapService:MapService) {
    mapService.cityRegionSubject.subscribe(data=>{
      this.regionData=data;
   });
  }

  ngOnInit(): void {
    this.mapService.getCityRegions();
  }

}

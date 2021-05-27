import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { PlakaComponent } from './plaka/plaka.component';
import { RegionComponent } from './region/region.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';
import { MapService } from 'src/libs';

const routes:Routes=[
  {path:"",component:MapComponent}
]

@NgModule({
  declarations: [CityComponent, PlakaComponent, RegionComponent,MapComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), FormsModule
  ],
  providers:[MapService]
})
export class MapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from "./map.component";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    LeafletModule,
    RouterModule.forChild([
      { path: '', component: MapComponent}
    ])
  ],
  declarations: [
    MapComponent
  ]
})
export class MapModule { }

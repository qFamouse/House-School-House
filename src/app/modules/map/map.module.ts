import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapPageComponent } from "./components/map-page/map-page.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { MarkerComponent } from "./components/marker/marker.component";

@NgModule({
	declarations: [MapPageComponent, MarkerComponent],
	imports: [CommonModule, LeafletModule, MatIconModule, HttpClientModule]
})
export class MapModule {}

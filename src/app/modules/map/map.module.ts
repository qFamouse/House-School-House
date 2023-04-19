import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapPageComponent } from "./components/map-page/map-page.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { MarkerComponent } from "./components/marker/marker.component";
import { LegendComponent } from "./components/legend/legend.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
	declarations: [MapPageComponent, MarkerComponent, LegendComponent],
	imports: [
		CommonModule,
		LeafletModule,
		MatIconModule,
		HttpClientModule,
		MatButtonModule,
		MatTooltipModule,
		MatRippleModule
	]
})
export class MapModule {}

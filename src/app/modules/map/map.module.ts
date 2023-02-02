import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapPageComponent } from "./components/map-page/map-page.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

@NgModule({
	declarations: [MapPageComponent],
	imports: [CommonModule, LeafletModule]
})
export class MapModule {}

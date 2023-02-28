import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutHeaderComponent } from "./components/header/layout-header.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MapModule } from "../modules/map/map.module";
import { PassportModule } from "../modules/passport/passport.module";

@NgModule({
	declarations: [LayoutHeaderComponent, LayoutComponent],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		MatIconModule,
		MatButtonModule,
		MapModule,
		PassportModule
	],
	bootstrap: [LayoutComponent]
})
export class LayoutModule {}

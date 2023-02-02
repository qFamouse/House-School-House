import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
	declarations: [HeaderComponent, LayoutComponent],
	imports: [CommonModule, LayoutRoutingModule],
	bootstrap: [LayoutComponent]
})
export class LayoutModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutHeaderComponent } from "./components/header/layout-header.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
	declarations: [LayoutHeaderComponent, LayoutComponent],
	imports: [CommonModule, LayoutRoutingModule],
	bootstrap: [LayoutComponent]
})
export class LayoutModule {}

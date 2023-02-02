import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { MapPageComponent } from "../modules/map/components/map-page/map-page.component";

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "map",
				component: MapPageComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {}

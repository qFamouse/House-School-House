import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { MapPageComponent } from "../modules/map/components/map-page/map-page.component";
import { appPages } from "../shared/constants/pages";
import {PassportPageComponent} from "../modules/passport/components/passport-page/passport-page.component";

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: appPages.map.name,
				component: MapPageComponent
			},
      {
        path: appPages.passport.name,
        component: PassportPageComponent
      }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {}

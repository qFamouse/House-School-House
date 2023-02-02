import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { appPages } from "./shared/constants/pages";

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: appPages.map.name
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

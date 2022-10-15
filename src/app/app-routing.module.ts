import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // I don't know what's better to import MODULE or COMPONENT. Because for component we should import LeafletModule into app-module, I prefer load map module
    path: '',
    loadChildren: () => import('./modules/map/map.module').then(m => m.MapModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

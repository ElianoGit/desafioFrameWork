import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'resources',
        loadChildren: () => import('./resources/resource-routing.module').then(m => m.ResourceRoutingModule)
    },
    { path: '', redirectTo: 'resources', pathMatch: 'full' },
    { path: '**', redirectTo: 'resources' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
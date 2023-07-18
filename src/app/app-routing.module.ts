import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SkeletonComponent } from "@layout/skeleton/skeleton.component";
import { FormularioComponent } from "@shared/formulario/formulario.component";
import { PageNotfoundComponent } from "@shared/page-notfound/page-notfound.component";

//Matriz de objetos para las rutas.
const routes: Routes=[
    {
        path:'',component:SkeletonComponent,
        children: [
            {
                path: '', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'directivas', loadChildren: () => import('@modules/directivas/directivas.module').then(m => m.DirectivasModule)
            },
            {
                path: 'mascotas', loadChildren: () => import('@modules/mascotas/mascotas.module').then(m => m.MascotasModule)
            },
            {
              path: 'anime', loadChildren: () => import('@modules/anime/anime.module').then(m => m.AnimeModule)
            },
            {
              path: 'librerias', loadChildren: () => import('@modules/upcalendar/upcalendar.module').then(m => m.UpcalendarModule)
            },
        ],
    },
    {
        path: 'shared/formulario', component: FormularioComponent , pathMatch: 'prefix'
    },
    {
        path: '**', component: PageNotfoundComponent  , pathMatch: 'full'
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}

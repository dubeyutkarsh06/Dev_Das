import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            { path: 'air', loadChildren: '../air/air.module#AirPageModule' },
            { path: 'water', loadChildren: '../water.water.module#WaterPageModule'},
        ]
    },
	{
	  path: '',
	  redirectTo: 'tabs/air',
	  pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            { path: 'feed', loadChildren: '../feed/feed.module#FeedPageModule' },
			{ path: 'air', loadChildren: '../air/air.module#AirPageModule' },
			{ path: 'water', loadChildren: '../water/water.module#WaterPageModule' },
			{ path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule' },
			{ path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
			{ path: 'post/:id', loadChildren: '../post/post.module#PostPageModule' },
			{ path: 'edit-profile', loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule'},
        ]
    },
	{
	  path: '',
	  redirectTo: 'tabs/feed',
	  pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InstallComponent } from './install/install.component';
import { HowComponent } from './how/how.component';
import { UsageComponent } from './usage/usage.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'how', component: HowComponent, children: [
      { path: 'install', component: InstallComponent },
      { path: 'usage', component: UsageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

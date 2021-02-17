import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeveloneComponent} from './levelone/levelone.component';
import { LeveltwoComponent} from './leveltwo/leveltwo.component';
import { LevelthreeComponent} from './levelthree/levelthree.component';
import { MenuComponent } from './menu/menu.component'


const routes: Routes = [

  {
    path:'menu', component:MenuComponent
  },
  {
    path:'level1', component:LeveloneComponent
  },
  {
    path:'level2', component: LeveltwoComponent
  },
  {
    path:'level3', component: LevelthreeComponent
  },

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
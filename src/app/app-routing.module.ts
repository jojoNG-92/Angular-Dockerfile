import { SettingsComponent } from './layout/main-outlet/settings/settings.component';
import { TeamComponent } from './layout/main-outlet/team/team.component';
import { ActivityComponent } from './layout/main-outlet/activity/activity.component';
import { BookComponent } from './layout/main-outlet/book/book.component';
import { WorkspaceComponent } from './layout/main-outlet/workspace/workspace.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './layout/main-outlet/tasks/tasks.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/workspace', pathMatch: 'full'
  },
  { path: '', component: LayoutComponent,
  children: [
      {
        path: 'workspace', component: WorkspaceComponent, data: {animation: 'workspace', extraParameter: 'workspaceMenu'}
      },
      {
        path: 'tasks', component: TasksComponent, data: {animation: 'task', extraParameter: 'TaskMenu'}
      },
      {
        path: 'book', component: BookComponent, data: {animation: 'book', extraParameter: 'facadeMenu'}
      },
      {
        path: 'activity', component: ActivityComponent, data: {animation: 'activity', extraParameter: 'activityMenu'}
      },
      {
        path: 'team', component: TeamComponent, data: {animation: 'team', extraParameter: 'teamMenu'}
      },
      {
        path: 'settings', component: SettingsComponent, data: {animation: 'settings', extraParameter: 'prefbMenu'}
      },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

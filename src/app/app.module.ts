import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { AccordionComponent } from './layout/sidebar/accordion/accordion.component';
import { WorkspaceComponent } from './layout/main-outlet/workspace/workspace.component';
import { BookComponent } from './layout/main-outlet/book/book.component';
import { ActivityComponent } from './layout/main-outlet/activity/activity.component';
import { TeamComponent } from './layout/main-outlet/team/team.component';
import { SettingsComponent } from './layout/main-outlet/settings/settings.component';
import { TasksComponent } from './layout/main-outlet/tasks/tasks.component';
import { ChartsModule } from 'ng2-charts';
import { ChartBarComponent } from './layout/main-outlet/activity/chart-bar/chart-bar.component';
import { ChartPieComponent } from './layout/main-outlet/activity/chart-pie/chart-pie.component';
import { BootComponent } from './boot/boot.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    AccordionComponent,
    WorkspaceComponent,
    BookComponent,
    ActivityComponent,
    TeamComponent,
    SettingsComponent,
    TasksComponent,
    ChartBarComponent,
    ChartPieComponent,
    BootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

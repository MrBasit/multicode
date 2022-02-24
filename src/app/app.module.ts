import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './multicodemain/main/main.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { SidebarcontrolsComponent } from './sidebarcontrols/sidebarcontrols.component';
import { SidebarcomponentComponent } from './sidebarcomponent/sidebarcomponent.component';
import { MainpanelcontrolsComponent } from './mainpanelcontrols/mainpanelcontrols.component';
import { EditorpanelComponent } from './editorpanel/editorpanel.component';
import { TabspanelComponent } from './tabspanel/tabspanel.component';
import { EditorComponent } from './editor/editor.component';
import { TabsComponent } from './tabs/tabs.component';
import { StartPopupComponent } from './popups/start-popup/start-popup.component';
import { SignUpComponent } from './popups/sign-up/sign-up.component';
import { ImportPopupComponent } from './popups/create/import-popup/import-popup.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { RouterModule } from '@angular/router';
import { CreateTeamComponent } from './create-team/create-team.component';
import { JoinTeamComponent } from './join-team/join-team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { TeaminfoComponent } from './teaminfo/teaminfo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeftpanelComponent,
    MainpanelComponent,
    SidebarcontrolsComponent,
    SidebarcomponentComponent,
    MainpanelcontrolsComponent,
    EditorpanelComponent,
    TabspanelComponent,
    EditorComponent,
    TabsComponent,
    StartPopupComponent,
    SignUpComponent,
    ImportPopupComponent,
    MainwindowComponent,
    CreateTeamComponent,
    JoinTeamComponent,
    TestComponent,
    TeaminfoComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'start', component: StartPopupComponent },
      { path: 'create', component: CreateTeamComponent },
      { path: 'join', component: JoinTeamComponent },
      {
        path: 'editor',
        component: MainwindowComponent,
        children: [
          {
            path: 'leftpanel',
            component: LeftpanelComponent,
            children: [
              { path: 'file', component: SidebarcomponentComponent },
              { path: 'test', component: TestComponent },
            ],
          },
        ],
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

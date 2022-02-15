import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ImportPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

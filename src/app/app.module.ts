import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersdbComponent } from './usersdb/usersdb.component';
import { DblistComponent } from './dblist/dblist.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { CodescriptComponent } from './codescript/codescript.component';
import { CodesectionComponent } from './codesection/codesection.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VersionlistComponent } from './versionlist/versionlist.component';
import { SchemaviewComponent } from './schemaview/schemaview.component';
import { SchemasectionComponent } from './schemasection/schemasection.component';
import { TableviewComponent } from './tableview/tableview.component';
import { ScriptstatusComponent } from './scriptstatus/scriptstatus.component';
import { DbtemplateComponent } from './dbtemplate/dbtemplate.component';
import { TbltemplateComponent } from './tbltemplate/tbltemplate.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersdbComponent,
    DblistComponent,
    StatusbarComponent,
    CodescriptComponent,
    CodesectionComponent,
    MenubarComponent,
    SigninComponent,
    SignupComponent,
    VersionlistComponent,
    SchemaviewComponent,
    SchemasectionComponent,
    TableviewComponent,
    ScriptstatusComponent,
    DbtemplateComponent,
    TbltemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

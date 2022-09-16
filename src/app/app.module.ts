import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersdbComponent } from './usersdb/usersdb.component';
import { DblistComponent } from './dblist/dblist.component';
import { TableinfoComponent } from './tableinfo/tableinfo.component';
import { DbinfoComponent } from './dbinfo/dbinfo.component';
import { RefertableComponent } from './refertable/refertable.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { CodescriptComponent } from './codescript/codescript.component';
import { CodesectionComponent } from './codesection/codesection.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VersionlistComponent } from './versionlist/versionlist.component';
import { SchemaviewComponent } from './schemaview/schemaview.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersdbComponent,
    DblistComponent,
    TableinfoComponent,
    DbinfoComponent,
    RefertableComponent,
    StatusbarComponent,
    CodescriptComponent,
    CodesectionComponent,
    MenubarComponent,
    TablelistComponent,
    SigninComponent,
    SignupComponent,
    VersionlistComponent,
    SchemaviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

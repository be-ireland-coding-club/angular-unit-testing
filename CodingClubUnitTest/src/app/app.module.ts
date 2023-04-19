import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingclubComponent } from './components/codingclub/codingclub.component';
import { LoginComponent } from './login/login.component';
import { TrimtextPipe } from './common/pipe/trimtext.pipe';
import { RowHighlightDirective } from './common/directives/row-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CodingclubComponent,
    LoginComponent,
    TrimtextPipe,
    RowHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

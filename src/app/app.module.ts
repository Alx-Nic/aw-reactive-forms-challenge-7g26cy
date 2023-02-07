import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NewsModule } from './news/news.module';
import { SubmitModule } from './submit/submit.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LinkRepoService } from './link-repo.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NewsModule,
    SubmitModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [LinkRepoService],
})
export class AppModule {}

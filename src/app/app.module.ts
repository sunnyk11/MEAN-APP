import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule
} from '@angular/material';

import { PostCreateComponent } from './posts/post-create/post-create.component';
import {HeaderComponent} from './Header/header.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import { PostService } from './posts/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule

  ],
  /*in providers we can enter the service class name i.e. for this project is PostService . one method
  is we can use services like this */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}

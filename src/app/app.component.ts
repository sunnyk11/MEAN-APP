import { Component } from '@angular/core';
import {Post} from './Posts/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-app';
  /* storedposts: Post [] =[] , this statement shows that storedposts is a type of Post[]  array defined
  in our model.ts file. so that */

 // storedposts = [];

 // below code will be used when parent child relationship
/* storedposts: Post[] = [];
  onPostAdded(post) {

    this.storedposts.push(post);

  } */
}

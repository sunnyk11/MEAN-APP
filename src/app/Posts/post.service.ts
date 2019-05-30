import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//subject is an event emitter type
@Injectable ({providedIn:'root'})
export class PostService {
  private posts: Post[] = [];

  constructor(private http: HttpClient){}
  //below is creating a new instance of subject and its generic type so we pass a list of post
  private postUpdated=new Subject<Post[]>();


  //angular httpclient uses observables
  getPosts() {
    //get method expects a path from backend
    this.http.get<{message:string;  posts:Post[]}>('http://localhost/3000/api/posts').subscribe((postData)=>{
    this.posts=postData.posts;
    this.postUpdated.next([...this.posts]);
    });
    //this statement will not be used when we are using backend -->return [...this.posts];
  }

  // here we are using asobservable which will return an object to which we can listen
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  /* addPost(post: Post) {

} */ /*this above statement can be used to pass parameters as the Post array , but another
method can also be used as shown below*/

addPost(title: string, content: string) {
const post: Post = {id:null, title: title, content: content };
this.posts.push(post);
// below statement does not emit it pushes new values
this.postUpdated.next([...this.posts]);
}



}

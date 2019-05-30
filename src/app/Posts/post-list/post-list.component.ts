import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post.model';
import { PostService } from '../post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})

/*When use ':' after any variable you have to define a datatype, if you dont want to define a datatype use '=' */

export class PostListComponent implements OnInit {
 /*  posts = [
      {title: 'First Post', content: 'This is the First Post'},
      {title: 'Second Post', content: 'This is the Second Post'},
      {title: 'Third Post', content: 'This is the Third Post'}

  ]; */

  //@Input() posts=[];
  private postsub:Subscription;
  constructor(public postservice:PostService) {}

  ngOnInit(){
    //this.posts=this.postservice.getPosts();
    this.postservice.getPosts();
    this.postsub=this.postservice.getPostUpdateListener()
    .subscribe((posts:Post[])=> {
      this.posts=posts;

    });
  }
  //@Input() posts: Post[]=[];
  posts: Post[]=[];
  /* we can only use this input from the parent component*/


}

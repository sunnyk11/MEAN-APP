/*We will emit our own event to transfer method from one component to other component */
/* We use output keyword so that we can listen to the events created outside the component */

import { Component, EventEmitter , Output } from '@angular/core';
import { Post } from '../post.model';
import {NgForm} from '@angular/Forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  enteredTitle= "";
  enteredContent= "";

  /*This is name of the event 'postCreated' */
  // output will be used only when we are using parent child relationship but we are using service
 //@Output() postCreated=new EventEmitter();

  /* onAddPost(){
    const post:Post= {
      title:this.enteredTitle,
      content: this.enteredContent
    } */
  constructor(public postservice: PostService) {}

    onAddPost(form:NgForm){
      if(form.invalid){
        return;
      }
     /*  const post:Post= {
        title: form.value.title,        /*the name property which we have defined in the form
        content: form.value.content
      } */
    /*in 'this.postCreated.emit(post) , post parameter is passed in the event */
    //this.postCreated.emit(post);

    this.postservice.addPost(form.value.title, form.value.content);
  }


}

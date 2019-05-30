
const express=require('express');

//we execute the below statement as a function and it will return us an express app

//important thing about an express app is it is actually  is just a big chain of middlewares we apply
//to the incoming requests
const app= express();

// 'use' is a middleware
// when 'next' parameter is used then the request will actually continue its journey

/* app.use((req,res,next) => {
  console.log('First Middleware');
  next();
}); */

app.use('/api/posts',(req,res,next) => {

  //we wont use this send method as we are not using any self made statement
  //res.send('Hello from express');
  const posts=[
    {id:'post1' , title:'First server side-post' , content:'This is coming from the server'},
    {id:'post2' , title:'Second server side-post' , content:'This is coming from the server'}
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts:posts
  });
  });

module.exports=app;




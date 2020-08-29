import React, { useState, useEffect } from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import "./Feed.css";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    console.log(posts);
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts?.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          userName={post.data.userName}
          message={post.data.message}
          image={post.data.image}
          timestamp={post.data.timestamp}
        />
      ))}

      {/*
      <Post
        profilePic="https://vignette.wikia.nocookie.net/avatar-ldmdla/images/8/85/250px-Aang_at_Jasmine_Dragon.png/revision/latest?cb=20140625183554&path-prefix=fr"
        userName="Aang"
        message="Coooooool!!!!!"
        timestamp="this is a timestamp"
        image="https://i2.wp.com/www.fr24news.com/fr/a1/wp-content/uploads/2020/08/avatar.jpg?fit=620%2C349&ssl=1"
      />
      <Post
        profilePic="https://vignette.wikia.nocookie.net/avatar-ldmdla/images/f/fb/Katara.png/revision/latest?cb=20121026155020&path-prefix=fr"
        userName="Cute B"
        message="Coooooool!!!!!"
        timestamp="this is a timestamp"
        image="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      />
      <Post
        profilePic="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
        userName="Ted"
        message="Coooooool!!!!!"
        timestamp="this is a timestamp"
        image="https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80"
      />
       */}
    </div>
  );
}

export default Feed;

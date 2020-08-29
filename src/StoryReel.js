import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80"
        profileSrc="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
        title="Ted"
      />
      <Story
        image="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        profileSrc="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043251-avatar-female-girl-woman_113291.png"
        title="Hope"
      />
      <Story
        image="https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
        profileSrc="https://resize-parismatch.lanmedia.fr/r/901,,forcex/img/var/news/storage/images/paris-match/vivre/auto-moto/avtr-le-sublime-concept-car-de-mercedes-benz-inspire-d-avatar-1668067/19c1037-001/27201754-1-fre-FR/19C1037-001.jpg"
        title="Poppy"
      />
      <Story
        image="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        profileSrc="https://vignette.wikia.nocookie.net/avatar-ldmdla/images/f/fb/Katara.png/revision/latest?cb=20121026155020&path-prefix=fr"
        title="Cute B"
      />
      <Story
        image="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        profileSrc="https://vignette.wikia.nocookie.net/avatar-ldmdla/images/8/85/250px-Aang_at_Jasmine_Dragon.png/revision/latest?cb=20140625183554&path-prefix=fr"
        title="Aang"
      />
    </div>
  );
}

export default StoryReel;

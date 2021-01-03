import React from 'react';
import "../css/post.css";

function Post(props) {
    return (
        <div className="post">
            <div className="head-post">
                <p className="head-image">
                    <img className="photo-image" src={props.author.photo} />
                </p>
                <p className="name">{props.author.name}</p>
                <p className="nickname">{props.author.nickname}</p>
                <p className="date">{props.date}</p>
            </div>
            <div className="content">
                <p className="post-content">{props.content}</p>
                <p className="image-content">
                    <img className="image-post" src={props.image} />
                </p>

            </div>
        </div>
    );
}

export default Post;
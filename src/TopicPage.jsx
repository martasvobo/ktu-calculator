import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./App";
import { arrayUnion, doc, getFirestore, onSnapshot, updateDoc } from "firebase/firestore";
import "./TopicPage.css"; // Import the CSS file

export default function TopicPage() {
  const user = useContext(UserContext);
  const { topicId } = useParams();
  const [topic, setTopic] = useState({});
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    return onSnapshot(doc(getFirestore(), "topics", topicId), (doc) => {
      setTopic(doc.data());
    });
  }, [topicId]);

  const addComment = async () => {
    const topicDoc = doc(getFirestore(), "topics", topicId);
    updateDoc(topicDoc, {
      comments: arrayUnion({ text: newComment, user: user.email }),
    });
  };

  return (
    <div className="topic-page-container">
      <div className="topic-header">{topic.topic}</div>
      <ul className="comment-list">
        {topic.comments &&
          topic.comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <span className="comment-text">{comment.text}</span>
              <span className="comment-user"> ({comment.user})</span>
            </li>
          ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="comment-input"
        placeholder="Comment"
      />
      <button onClick={addComment} className="comment-button">
        Comment
      </button>
    </div>
  );
}
import {
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TopicPage() {
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
      comments: arrayUnion(newComment),
    });
  };
  return (
    <div>
      <div>{topic.topic}</div>
      <ul>
        {topic.comments &&
          topic.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Comment"
      />
      <button onClick={addComment}>Comment</button>
    </div>
  );
}

import React, { useContext, useEffect, useState } from 'react';
import './TopicsPage.css'; // Import CSS file
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot
} from 'firebase/firestore';
import { UserContext } from './App';
import { Link } from 'react-router-dom';

const TopicsPage = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const user = useContext(UserContext);

  useEffect(() => {
    return onSnapshot(collection(getFirestore(), 'topics'), (snapshot) => {
      setTopics(snapshot.docs);
    });
  }, []);

  const handleAddTopic = async() => {
    if (newTopic.trim() !== '') {
      await addDoc(collection(getFirestore(), 'topics'), {
        op: user.uid,
        topic: newTopic,
        comments: []
      });
    }
  };

  return (
    <div className="topics-container">
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/' className='main-page-button'>Pagrindinis puslapis</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1>Temu sarasas</h1>
      <div className="input-container">
        <input
          type='text'
          value={ newTopic }
          onChange={ (e) => setNewTopic(e.target.value) }
          placeholder='Ivesk pavadinima'
        />
        <button onClick={ handleAddTopic }>Prideti tema</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={ index }>
              <td>
                <Link to={ `/topics/${  topic.id}` }>{topic.data().topic}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopicsPage;
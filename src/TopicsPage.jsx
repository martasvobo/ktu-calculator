import React, { useState } from 'react';
import './TopicsPage.css'; // Import CSS file
const TopicsPage = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState('');

  const handleAddTopic = () => {
    if (newTopic.trim() !== '') {
      setTopics([...topics, newTopic.trim()]);
      setNewTopic('');
    }
  };

  return (
    <div>
      <h1>Temu sarasas</h1>
      <div>
        <input
          type="text"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          placeholder="Ivesk pavadinima"
        />
        <button onClick={handleAddTopic}>Prideti tema</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={index}>
              <td>{topic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopicsPage;
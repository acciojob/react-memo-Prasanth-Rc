import React, { useState } from 'react';
import Skill from '../components/Skill';

export default function ReactMemo() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const handleSubmit = () => {
    setSkills([...skills, skill]);
    setSkill('');
  };

  return (
    <div>
      <input
        data-test="memo-input"
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button data-test="submit-button" onClick={handleSubmit}>Add Skill</button>
      {skills.map((s, index) => (
        <Skill key={index} skill={s} />
      ))}
    </div>
  );
}

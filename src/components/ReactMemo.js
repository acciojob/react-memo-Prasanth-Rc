import React, { useState } from 'react';
import Skill from '../components/Skill';

const ReactMemo = () => {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (skill) {
      setSkills([...skills, skill]);
      setSkill('');
    }
  };

  return (
    <div>
      <h2>React Memo Example</h2>
      <input
        type="text"
        placeholder="Enter skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      {skills.map((s, i) => <Skill key={i} skill={s} />)}
    </div>
  );
};

export default ReactMemo;

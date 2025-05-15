import React from 'react';

const Skill = React.memo(({ skill }) => {
  return <p>{skill}</p>;
});

export default Skill;

import React from 'react';
import SkillCard from '../components/SkillCard';
import {skillList} from "../utils/constants"
export default function Skills() {
  return (
    <div className='box container' id='skills'>
      <div className=' grid gap-4 grid-cols-3 md:grid-cols-4 xl:grid-cols-6'>
        {skillList.map((skill, i) => (
          <SkillCard skill={skill} key={i} />
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import {Link} from 'react-router-dom';

function DogsList({ dogs }) {
  console.log(dogs)
  return (
    <div>
      {dogs.map(dog => (
        <div>
          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          <p> {dog.age}</p>
        </div>
      ))}
    </div>
  )
}

export default DogsList;
import React from 'react';
import { useParams } from 'react-router-dom';

function DogDetails({dogs}){
  const { name } = useParams();
  console.log(name);
  let currentDog;
  for(let pup of dogs){
    if(pup.name === name){
      currentDog = pup;
    }
  }
  console.log(currentDog)

  return (
    <div>
      <p> {currentDog.name}</p>
      <p> {currentDog.age}</p>
      <img src={currentDog.src} alt="dog"/>
      {currentDog.facts.map(fact => (
        <p>{fact}</p>
      ))}
    </div>
  )
}

export default DogDetails;
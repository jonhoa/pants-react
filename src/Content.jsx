import { PantsIndex } from './PantsIndex';
import { PantsNew } from './PantsNew';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Content() {
  const [pants, setPants] = useState([{
    id: 1,
    name: "Pant",
    brief: "Something you wear"
  }]);

  const handleIndexPants = () => {
    console.log("Running from Index pants");
    axios.get("http://localhost:3000/pants").then((response) => {
      console.log(response.data);
      setPants(response.data);
    });
  };

  useEffect(handleIndexPants, []);

  return (
    <div>
      <PantsNew />
      <PantsIndex pants = {pants}/>
    </div>
  );
}

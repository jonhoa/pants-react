import { PantsIndex } from './PantsIndex';
import { PantsNew} from './PantsNew';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

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

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false); 

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/pants/new" element={<PantsNew />} />
      </Routes>
      <PantsIndex pants={pants} onSelectPost = {handleShowPost}/>
    </div>
  );
}

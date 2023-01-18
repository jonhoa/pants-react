import { Modal } from "./Modal";

export function PantsIndex(props) { 
  console.log(props.pants);

const handleClick = () => {
 console.log("test click");
};

// add modal here to prompt more info

  return (
    props.pants.map(pants => (
      <div key ={pants.id}>
        <p>Name: {pants.name}</p>
        <p>Size: {pants.size}</p>
        <p>Length: {pants.length}</p>
        <p>Waist: {pants.waist}</p>
        <p><img src={pants.image}/></p>
        <p>Style: {pants.style}</p>
        <button type="submit" onClick={handleClick}>Learn more</button>
        <hr/>
        <Modal show={true}>
        <p>TEST</p>
      </Modal>
      </div>
    ))
  );
}

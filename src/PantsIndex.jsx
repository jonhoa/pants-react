export function PantsIndex(props) { 
  console.log(props.pants);

  return (
    props.pants.map(pants => (
      <div key ={pants.id}>
        <p>Name: {pants.name}</p>
        <p>Size: {pants.size}</p>
        <p>Length: {pants.length}</p>
        <p>Waist: {pants.waist}</p>
        <p><img src={pants.image}/></p>
        <p>Style: {pants.style}</p>
        <button type="submit">Learn more</button>
        <hr/>
      </div>
    ))
  );
}

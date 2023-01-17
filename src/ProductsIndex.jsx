export function ProductsIndex(props) { 
  console.log(props.pants);

  return (
    props.pants.map(pants => (
      <div key ={pants.id}>
        <h1>Data</h1>
        <p>name: {pants.name}</p>
      </div>
    ))
  );
}

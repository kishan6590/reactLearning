const Cards = (props) => {
  console.log(props);

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h3>{props.profession}</h3>
      <h4>{props.age}</h4>
      <p>{props.city}</p>
    </div>
  );
};
export default Cards;

const Planets = ({img, name, description, km, time}) => {
  return (
    <div id="planets">
    <img src={img} alt={name} />
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="planets-line"></div>
        <p>Avg. Distance</p>
        <h1>{km}</h1>
        <p>Est. Travel Time</p>
        <h1>{time}</h1>
    </div>
  );
};

export default Planets;
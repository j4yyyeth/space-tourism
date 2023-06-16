const Planets = ({img, name, description, km, time}) => {
  return (
    <div id="planets">
      <img src={img} alt={name} />
      <div className="planets-text">
      {/* <button className={active === 1 ? 'active-dst-btn' : 'dst-btn'} onClick={()=>handle(1)}>Moon</button>
      <button className={active === 2 ? 'active-dst-btn' : 'dst-btn'} onClick={()=>handle(2)}>Mars</button>
      <button className={active === 3 ? 'active-dst-btn' : 'dst-btn'} onClick={()=>handle(3)}>Europa</button>
      <button className={active === 4 ? 'active-dst-btn' : 'dst-btn'} onClick={()=>handle(4)}>Titan</button> */}
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="planets-line"></div>
        <p>Avg. Distance</p>
        <h1>{km}</h1>
        <p>Est. Travel Time</p>
        <h1>{time}</h1>
      </div>
    </div>
  );
};

export default Planets;
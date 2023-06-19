const LaunchTech = ({name, description, img}) => {
  return (
    <div className="tech-flex">
      <div className="tech-text">
        <h3>The Terminology...</h3>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
        <img src={img} alt={name} />
    </div>
  );
};

export default LaunchTech;
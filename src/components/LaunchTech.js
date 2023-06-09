const LaunchTech = ({name, description, img}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={img} alt={name} />
    </div>
    
  );
};

export default LaunchTech;
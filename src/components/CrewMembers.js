const CrewMembers = ({job, name, description, img}) => {
  return (
    <div>
      <h2>{job}</h2>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={img} alt={name} />
    </div>
  );
};

export default CrewMembers;

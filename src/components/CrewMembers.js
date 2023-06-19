const CrewMembers = ({job, name, description, img, handle, active}) => {
  return (
    <div id="crew-members">
      <div className="crew-text">
        <div className="crew-before-btns">
          <div className="crew-first-text">
            <h2>{job}</h2>
            <h1>{name}</h1>
          </div>
          <p>{description}</p>
        </div>
        <div className="crew-btns">
          <button className={active === 1 ? 'active-crew-btn' : 'crew-btn'} onClick={()=>handle(1)}></button>
          <button className={active === 2 ? 'active-crew-btn' : 'crew-btn'} onClick={()=>handle(2)}></button>
          <button className={active === 3 ? 'active-crew-btn' : 'crew-btn'} onClick={()=>handle(3)}></button>
          <button className={active === 4 ? 'active-crew-btn' : 'crew-btn'} onClick={()=>handle(4)}></button>
        </div>
      </div>
      <>
        <img src={img} alt={name} />
      </>
    </div>
  );
};

export default CrewMembers;
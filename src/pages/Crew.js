import { useState } from "react";
import Navbar from "../components/Navbar";
import CrewMembers from "../components/CrewMembers";

const Crew = () => {
  const [ job, setJob ] = useState('Commander');
  const [ name, setName ] = useState('Douglas Hurley');
  const [ description, setDescription ] = useState('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.');
  const [ img, setImg ] = useState('crew/image-douglas-hurley.png');
  const [ active, setActive ] = useState(1);

  const handle = (num) => {
    switch(num) {
        case 1:
            setJob('Commander');
            setName('Douglas Hurley');
            setDescription('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.');
            setImg('crew/image-douglas-hurley.png');
            setActive(1);
            break;
        case 2:
            setJob('Pilot');
            setName('Victor Glover');
            setDescription('Victor Glover was Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.');
            setImg('crew/image-victor-glover.png');
            setActive(2);
            break;
        case 3:
            setJob('Mission Specialist');
            setName('Mark Shuttleworth');
            setDescription('Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.');
            setImg('crew/image-mark-shuttleworth.png');
            setActive(3);
            break;
        case 4:
            setJob('Flight Engineer');
            setName('Anousheh Ansari');
            setDescription('Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.');
            setImg('crew/image-anousheh-ansari.png');
            setActive(4);
            break;
        default:
            setJob('Commander');
            setName('Douglas Hurley');
            setDescription('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.');
            setImg('crew/image-douglas-hurley.png');
            setActive(1);
            break;
    }
  }

  return (
    <div id="crew">
      <Navbar />
      <h1>02 Meet Your Crew</h1>
      <CrewMembers job={job} name={name} description={description} img={img} />
      <div className="crew-btns">
        <button className={active === 1 ? 'active-crew-btn' : 'crew-btn'} onClick={()=>handle(1)}></button>
        <button onClick={()=>handle(2)}></button>
        <button onClick={()=>handle(3)}></button>
        <button onClick={()=>handle(4)}></button>
      </div>
    </div>
  );
};
  
export default Crew;    
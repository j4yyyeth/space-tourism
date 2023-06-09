import { useState } from "react";
import Navbar from "../components/Navbar";
import Planets from "../components/Planets";

const Destination = () => {
  const [ img, setImg ] = useState('destination/image-moon.png');
  const [ name, setName ] = useState('Moon');
  const [ description, setDescription ] = useState('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.');
  const [ km, setKm ] = useState('384,400 KM');
  const [ time, setTime ] = useState('3 Days');
  const [ active, setActive ] = useState(1);

  const handle = (num) => {
    switch(num) {
        case 1:
            setActive(1);
            setImg('destination/image-moon.png');
            setName('Moon');
            setDescription('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.');
            setKm('384,400 KM');
            setTime('3 Days');
            break;
        case 2:
            setActive(2);
            setImg('destination/image-mars.png');
            setName('Mars');
            setDescription('Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!');
            setKm('225 MIL. KM');
            setTime('9 Months');
            break;
        case 3:
            setActive(3);
            setImg('destination/image-europa.png');
            setName('Europa');
            setDescription('The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.');
            setKm('628 MIL. KM');
            setTime('3 Years');
            break;
        case 4:
            setActive(4);
            setImg('destination/image-titan.png');
            setName('Titan');
            setDescription('The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.');
            setKm('1.6 BIL. KM');
            setTime('7 Years');
            break;
        default:
            setActive(1);
            setImg('destination/image-moon.png');
            setName('Moon');
            setDescription('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.');
            setKm('384,400 KM');
            setTime('3 Days');
            break;
    }
  }

  return (
    <div id="destination">
      <Navbar />
      <h1 className="page-h1">01 Pick Your Destination</h1>
      <Planets img={img} name={name} description={description} km={km} time={time} handle={handle} active={active} />
    </div>
  );
};
  
export default Destination;
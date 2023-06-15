import { useState } from "react";
import Navbar from "../components/Navbar";
import LaunchTech from "../components/LaunchTech";

const Technology = () => {
    const [ name, setName ] = useState('Launch Vehicle');
    const [ description, setDescription ] = useState(`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`);
    const [ img, setImg ] = useState('technology/image-launch-vehicle-portrait.jpg');
    const [ active, setActive ] = useState(1);

    const handle = (num) => {
        switch(num) {
            case 1:
                setName('Launch Vehicle');
                setDescription(`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`);
                setImg('technology/image-launch-vehicle-portrait.jpg');
                setActive(1);
                break;
            case 2:
                setName('Space Capsule');
                setDescription(`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`);
                setImg('technology/image-space-capsule-portrait.jpg');
                setActive(2);
                break;
            case 3:
                setName('Spaceport');
                setDescription(`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`);
                setImg('technology/image-spaceport-portrait.jpg');
                setActive(3);
                break;
            default:
                setName('Launch Vehicle');
                setDescription(`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`);
                setImg('technology/image-launch-vehicle-portrait.jpg');
                setActive(1);
                break;
        }
    }

    return (
        <div id="technology">
            <Navbar />
            <h1>03 Space Launch 101</h1>
            <button className={active === 1 ? 'active-tch-btn' : 'tch-btn'} onClick={()=>handle(1)}>1</button>
            <button className={active === 2 ? 'active-tch-btn' : 'tch-btn'} onClick={()=>handle(2)}>2</button>
            <button className={active === 3 ? 'active-tch-btn' : 'tch-btn'} onClick={()=>handle(3)}>3</button>
            <h3>The Terminology...</h3>
            <LaunchTech name={name} description={description} img={img} />
        </div>
    );
};
  
export default Technology;
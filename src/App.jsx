import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  
  const [bank, setBank] = useState(bankA);
  const [display, setDisplay] = useState(""); 
  const [powerOff, setPowerOff] = useState(false);
  const [volume, setVolume] = useState(50);


  const handleClick = (e) => {
    let selected = bank.filter(el => el.keyPad === e.target.value);
    activatePad(selected[0].id);
    setDisplay(selected[0].id);
    playAudio(selected[0].keyPad);
  }

  
  const handleKeyDown = (e) => {
    let selected = bank.filter(el => el.keyCode === e.keyCode);
    activatePad(selected[0].id);
    setDisplay(selected[0].id);
    playAudio(selected[0].keyPad);
  }


  const playAudio = (id) => {
    let audio = document.getElementById(id) || null ;
    if(audio) {
    audio.currentTime = 0;
    audio.volume = volume/100;
    audio.play();
    }
  }
 

  const activatePad = (id) => {
      let pad = document.getElementById(id);
      { pad ? pad.style.backgroundColor = "black" : null}
      setTimeout( () => {
        pad ? pad.style.backgroundColor = "transparent" : null;
      }, 100);
    }
  

const updateBank = (e) => {
  setDisplay("");
  switch(e.target.value) {
    case 'A': 
    setBank(bankA);
    return;
    case 'B': 
    setBank(bankB);
    return;
    default:
    return;
  }
}


const handlePowerBtn = () => {
  setDisplay("");
  setPowerOff(!powerOff);
}

const handleVolumeChange = (e) => setVolume(e.target.value);

document.addEventListener('keydown', handleKeyDown);

  return (
    <>
    <div id="wrapper">
      <div id="drum-machine">

      <Buttons handleClick={handleClick} 
      powerOff={powerOff} 
      bank={ bank === bankA ? bankA : bankB }
      id={bank === bankA  ? "heater-kit" : "smooth-piano-kit"} />

        <Display name={display} 
        powerOff={powerOff} 
        handlePowerBtn={handlePowerBtn} 
        volume={volume} 
        handleVolumeChange={handleVolumeChange}
        bank={bank === bankA ? bankA : bankB}
        bankName={bank === bankA ? "Heater Kit" : "Smooth Piano Kit"}
        bankA={bankA}
        updateBank={updateBank} />

      </div>
    </div>
    </>
  )
}

const bankA = [
  {
    keyCode: 81,
    keyPad: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyPad: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyPad: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyPad: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyPad: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyPad: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyPad: "Z",
    id: "Kick-n-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyPad: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  }
  ,{
    keyCode: 67,
    keyPad: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const bankB = [
  {
    keyCode: 81,
    keyPad: "Q",
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyPad: "W",
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyPad: "E",
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyPad: "A",
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyPad: "S",
    id: 'Open--HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyPad: "D",
    id: 'Closed--HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyPad: "Z",
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyPad: "X",
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyPad: "C",
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];


export default App

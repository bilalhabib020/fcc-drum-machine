import Heading from "./Heading"
import PowerButton from "./PowerButton"
import SwitchBankBtn from "./SwitchBankBtn"
import Volume from "./Volume"



export default function Default ({ name, powerOff, handlePowerBtn, volume, handleVolumeChange, bankName, updateBank }) {
    return (
        <div id="display-and-controls">
            <Heading powerOff={powerOff} />
             <div id="controls">
                <PowerButton handlePowerBtn={handlePowerBtn} />
                <SwitchBankBtn updateBank={updateBank} />
                <Volume powerOff={powerOff} volume={volume} handleVolumeChange={handleVolumeChange} />
            </div>
            
            <div id="display" className="text-light">
                <span className="bank-name">{powerOff ? "" : bankName}</span>
               <p className="sound-name">{powerOff ? "" : name.replace(/[\-]+/g," ")}</p>
                </div>
                
           
        </div>
    )
}
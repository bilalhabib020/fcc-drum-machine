import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


export default function Heading ({ powerOff }) {
    return (
    <div id="heading-div">
        { powerOff ? <FontAwesomeIcon icon={faMusic}  id='musicIcon' className='text-light'/> 
        : 
        <FontAwesomeIcon icon={faMusic} fade style={{color: "#00ff7b"}} id='musicIcon'  /> }
        <h3 id='heading' className='text-light'>Drum Machine</h3>
    </div>
    )
}
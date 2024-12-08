
export default function Buttons ({ handleClick , bank, powerOff, id }) {

    return (
        <div className="buttons" id={id} key={id}>
          { 
          bank.map((el, index) => <button key={el.id + index} onClick={handleClick} value={el.keyPad} id={el.id} disabled={powerOff} className="drum-pad rounded-0" >
            {el.keyPad} { !powerOff && <audio src={el.url} id={el.keyPad} className="clip"></audio>}
          </button>  ) 
          }
               
             
        </div>
    )
}
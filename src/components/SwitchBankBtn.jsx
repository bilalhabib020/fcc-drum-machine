
export default function SwitchBankBtn ({ updateBank }) {
    return (
        <div id="switchBtn-div">
        <div className="radio">
          <input
            className="radio-input"
            type="radio"
            value="A"
            id="bankA-option"
            name="bankSwitch"
            onClick={updateBank}
            defaultChecked
          />
          <label className="form-check-label text-light" htmlFor="bankA-option">
            Bank A
          </label>
        </div>
        <div className="radio">
          <input
            className="radio-input"
            type="radio"
            value="B"
            id="bankB-option"
            name="bankSwitch"
            onClick={updateBank}
          />
          <label className="form-check-label text-light" htmlFor="bankB-option">
            Bank B
          </label>
        </div>
      </div>
      
    )
}
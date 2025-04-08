import "./Button.css"

export default function Button({value,onClick,disabled,size="m"}){

  return(<>
      <div className="btn-container">
        <button className={`btn-${size}`} onClick={onClick} disabled={disabled}>{value}</button>
      </div>
    </>)
}
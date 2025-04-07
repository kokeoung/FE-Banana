export default function Button({value,onClick,disabled,size}){

  return(<>
      <div className="btn-container">
        <button className={`btn-${size}`} onClick={onClick} disabled={disabled}>{value}</button>
      </div>
    </>)
}
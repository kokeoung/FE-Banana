import "./Input.css"

export default function Input({size,onChange,type="text",value,placeholder,error}){

  return(<>
  <div className="input-container">
    <input className={`size-${size}`} type={type} onChange={onChange} value={value} placeholder={placeholder} />
    {error&&<div className="input-error">{error}</div>}
  </div>
  </>)
}
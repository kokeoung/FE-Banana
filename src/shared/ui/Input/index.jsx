import "./Input.css"

export default function Input({name,size,onChange,type="text",
                              value,placeholder,error,
                              onBlur,onFocus}){

  return(<>
  <div className="input-container">
    <input className={`size-${size}`} name={name} type={type} 
          onChange={onChange} value={value} placeholder={placeholder} 
          onFocus={onFocus} onBlur={onBlur} accept="image/*"/>
    {error&&<div className="input-error">{error}</div>}
  </div>
  </>)
}
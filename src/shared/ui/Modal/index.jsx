import "./Modal.css"
import Button from "@shared/ui/Button"

export default function Modal({isOpen,children,onClose}){

  if(!isOpen)return null;

  return(<>
    <div className="modal-warp">
      <div className="modal-container" >
        <div className="modal-main">
          {children}
        </div>
        <div className="modal-footer">
          <Button onClick={onClose} value="확인"/>
        </div>
      </div>
    </div>
    
  </>)
}
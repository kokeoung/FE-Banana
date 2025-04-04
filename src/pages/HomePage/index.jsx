import { Button } from 'react-bootstrap';

export default function HomePage(){
  return(<>
    <h1>홈페이지</h1>
    <Button variant="primary">Primary 버튼</Button>
    <Button variant="danger" className="ms-2">Danger 버튼</Button>
  </>)
}
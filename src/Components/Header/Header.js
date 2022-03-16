import { Navbar,Container } from "react-bootstrap"

const Header = () => {
  return (
    
<Navbar>
    <Container>
        <Navbar.Brand href="#home">React Form Checkpoint</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            Made by: <a href="#login">Ismail Ousji</a>
        </Navbar.Text>
        </Navbar.Collapse>
    </Container>
    
</Navbar>
    
  )
}

export default Header
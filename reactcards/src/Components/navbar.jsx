import {Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,Nav,NavLink,UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu} from "reactstrap";


const Navigation = () =>{
 
    return(
<div 
  
>
  <Navbar
    className="navbar"
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      User Login
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <><button >SignUp</button></>
    </Collapse>
  </Navbar>
</div>
 );
 }

 export default Navigation;
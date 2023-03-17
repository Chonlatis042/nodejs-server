import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'

class Topnavber extends Component {
    render(){
        return (
            <Fragment>
                <Navbar className='bg-light shadow-sm md-3' sticky="top" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href='/'>
                            <img alt='' src='./images/Liu-Yi-Fei-2.jpg' width='30' hight='30'  className='App-logo'/>{' '}
                            刘亦菲
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navber-nav' />
                        <Navbar.Collapse id='basic-navber-nav'>
                        <Nav className='me-auto'>
                            <div className='navbar-nav mr-auto'>
                                <li className='nav-item'>
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to="/about" className="nav-link">About</NavLink>
                                </li>
                            </div>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </Fragment>
        )
    }
}

export default Topnavber


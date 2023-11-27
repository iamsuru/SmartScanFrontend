import React from 'react'
import { Link } from 'react-router-dom'
import { NavItem, NavbarBrand } from 'reactstrap'

function NavigationBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md nav-bg">
                <div className="container">
                    <NavbarBrand className='logo' href='/'>SmartScan</NavbarBrand>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <NavItem>
                                <Link className='nav-nav-link mx-4' to='/'>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-nav-link mx-4' to='/signup'>Signup</Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-nav-link mx-4' to='/form'>Form</Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-nav-link mx-4' to='/upload'>Upload</Link>
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
import React from 'react'
import { NavItem, NavLink, NavbarBrand } from 'reactstrap'

function NavigationBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md nav-bg">
                <div className="container">
                    <NavbarBrand className='logo' href='/SmartScanFrontend'>SmartScan</NavbarBrand>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <NavItem>
                                <NavLink className='nav-nav-link mx-4' href='/'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-nav-link mx-4' href='/SmartScanFrontend/signup'>Signup</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-nav-link mx-4' href='/SmartScanFrontend/form'>Form</NavLink>
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
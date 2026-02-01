import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    const navStyle={
        margin: '0 10px'
    }
  return (
    <div>
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', backgroundColor: '#242424', display: 'flex', justifyContent: 'center' }}>
            <Link to="/" style={navStyle}>Home</Link>
            <Link to="/about" style={navStyle}>About</Link>
            <Link to="/services" style={navStyle}>Services</Link>
            <Link to="/contact" style={navStyle}>Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar
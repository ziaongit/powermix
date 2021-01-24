import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Search from './Search';

const Header = () => {
    return (
      <div className="nav">
      <div className="container">
      <Navbar expand="lg">
      <Navbar.Brand href="#home"><svg width="177" height="29" viewBox="0 0 177 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.448 2.296C11.76 2.296 14.172 3.016 15.684 4.456C17.22 5.872 17.988 7.828 17.988 10.324C17.988 11.812 17.676 13.216 17.052 14.536C16.428 15.832 15.384 16.876 13.92 17.668C12.48 18.46 10.512 18.856 8.016 18.856H5.676V28H0.24V2.296H8.448ZM8.16 6.76H5.676V14.392H7.476C9.012 14.392 10.224 14.092 11.112 13.492C12.024 12.868 12.48 11.872 12.48 10.504C12.48 8.008 11.04 6.76 8.16 6.76ZM40.2695 18.136C40.2695 21.4 39.4055 23.92 37.6775 25.696C35.9735 27.472 33.6455 28.36 30.6935 28.36C28.8695 28.36 27.2375 27.964 25.7975 27.172C24.3815 26.38 23.2655 25.228 22.4495 23.716C21.6335 22.18 21.2255 20.32 21.2255 18.136C21.2255 14.872 22.0775 12.364 23.7815 10.612C25.4855 8.86 27.8255 7.984 30.8015 7.984C32.6495 7.984 34.2815 8.38 35.6975 9.172C37.1135 9.964 38.2295 11.116 39.0455 12.628C39.8615 14.116 40.2695 15.952 40.2695 18.136ZM26.6975 18.136C26.6975 20.08 27.0095 21.556 27.6335 22.564C28.2815 23.548 29.3255 24.04 30.7655 24.04C32.1815 24.04 33.2015 23.548 33.8255 22.564C34.4735 21.556 34.7975 20.08 34.7975 18.136C34.7975 16.192 34.4735 14.74 33.8255 13.78C33.2015 12.796 32.1695 12.304 30.7295 12.304C29.3135 12.304 28.2815 12.796 27.6335 13.78C27.0095 14.74 26.6975 16.192 26.6975 18.136ZM58.6514 21.124C58.5554 20.716 58.4114 20.116 58.2194 19.324C58.0514 18.508 57.8594 17.644 57.6434 16.732C57.4274 15.796 57.2234 14.944 57.0314 14.176C56.8394 13.384 56.7074 12.808 56.6354 12.448H56.4914C56.4194 12.808 56.2874 13.384 56.0954 14.176C55.9274 14.944 55.7354 15.796 55.5194 16.732C55.3034 17.644 55.0994 18.508 54.9074 19.324C54.7154 20.14 54.5714 20.764 54.4754 21.196L52.8914 28H47.1314L41.5514 8.344H46.8794L49.1474 17.056C49.3154 17.656 49.4594 18.376 49.5794 19.216C49.7234 20.056 49.8554 20.872 49.9754 21.664C50.0954 22.432 50.1794 23.044 50.2274 23.5H50.3714C50.3954 23.164 50.4434 22.72 50.5154 22.168C50.5874 21.592 50.6714 21.004 50.7674 20.404C50.8874 19.804 50.9834 19.264 51.0554 18.784C51.1514 18.28 51.2234 17.944 51.2714 17.776L53.6834 8.344H59.5874L61.8914 17.776C61.9874 18.112 62.0954 18.652 62.2154 19.396C62.3594 20.14 62.4794 20.896 62.5754 21.664C62.6954 22.432 62.7554 23.044 62.7554 23.5H62.8994C62.9474 23.092 63.0314 22.504 63.1514 21.736C63.2714 20.944 63.4034 20.116 63.5474 19.252C63.7154 18.388 63.8834 17.656 64.0514 17.056L66.3914 8.344H71.6474L65.9954 28H60.1634L58.6514 21.124ZM82.9314 7.984C85.6434 7.984 87.7914 8.764 89.3754 10.324C90.9594 11.86 91.7514 14.056 91.7514 16.912V19.504H79.0794C79.1274 21.016 79.5714 22.204 80.4114 23.068C81.2754 23.932 82.4634 24.364 83.9754 24.364C85.2474 24.364 86.3994 24.244 87.4314 24.004C88.4634 23.74 89.5314 23.344 90.6354 22.816V26.956C89.6754 27.436 88.6554 27.784 87.5754 28C86.5194 28.24 85.2354 28.36 83.7234 28.36C81.7554 28.36 80.0154 28 78.5034 27.28C76.9914 26.536 75.8034 25.42 74.9394 23.932C74.0754 22.444 73.6434 20.572 73.6434 18.316C73.6434 16.012 74.0274 14.104 74.7954 12.592C75.5874 11.056 76.6794 9.904 78.0714 9.136C79.4634 8.368 81.0834 7.984 82.9314 7.984ZM82.9674 11.8C81.9354 11.8 81.0714 12.136 80.3754 12.808C79.7034 13.48 79.3074 14.524 79.1874 15.94H86.7114C86.6874 14.74 86.3754 13.756 85.7754 12.988C85.1754 12.196 84.2394 11.8 82.9674 11.8ZM107.081 7.984C107.345 7.984 107.657 7.996 108.017 8.02C108.377 8.044 108.665 8.08 108.881 8.128L108.485 13.168C108.317 13.12 108.065 13.084 107.729 13.06C107.417 13.012 107.141 12.988 106.901 12.988C105.989 12.988 105.113 13.156 104.273 13.492C103.433 13.804 102.749 14.32 102.221 15.04C101.717 15.76 101.465 16.744 101.465 17.992V28H96.101V8.344H100.169L100.961 11.656H101.213C101.789 10.648 102.581 9.784 103.589 9.064C104.597 8.344 105.761 7.984 107.081 7.984ZM135.525 7.984C137.757 7.984 139.437 8.56 140.565 9.712C141.717 10.84 142.293 12.664 142.293 15.184V28H136.929V16.516C136.929 13.684 135.945 12.268 133.977 12.268C132.561 12.268 131.553 12.772 130.953 13.78C130.353 14.788 130.053 16.24 130.053 18.136V28H124.689V16.516C124.689 13.684 123.705 12.268 121.737 12.268C120.249 12.268 119.217 12.832 118.641 13.96C118.089 15.064 117.813 16.66 117.813 18.748V28H112.449V8.344H116.553L117.273 10.864H117.561C118.161 9.856 118.977 9.124 120.009 8.668C121.065 8.212 122.157 7.984 123.285 7.984C124.725 7.984 125.949 8.224 126.957 8.704C127.965 9.16 128.733 9.88 129.261 10.864H129.729C130.329 9.856 131.157 9.124 132.213 8.668C133.293 8.212 134.397 7.984 135.525 7.984ZM150.516 0.639998C151.308 0.639998 151.992 0.831999 152.568 1.216C153.144 1.576 153.432 2.26 153.432 3.268C153.432 4.252 153.144 4.936 152.568 5.32C151.992 5.704 151.308 5.896 150.516 5.896C149.7 5.896 149.004 5.704 148.428 5.32C147.876 4.936 147.6 4.252 147.6 3.268C147.6 2.26 147.876 1.576 148.428 1.216C149.004 0.831999 149.7 0.639998 150.516 0.639998ZM153.18 8.344V28H147.816V8.344H153.18ZM162.817 17.956L156.481 8.344H162.565L166.381 14.608L170.233 8.344H176.317L169.909 17.956L176.605 28H170.521L166.381 21.268L162.241 28H156.157L162.817 17.956Z" fill="#0A2540"/>
      </svg>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pro">Pro</Nav.Link>
          <Nav.Link href="#mediaManagers">Media Managers</Nav.Link>
          <Nav.Link href="#highTechTalents">HighTech_Talents</Nav.Link>
        </Nav>
        <Search />
        <Button className="header-btn">Start Earning</Button>
          <NavDropdown title={<div><svg width="50" height="25" viewBox="0 0 67 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0773 24.9756V23.2236C24.0773 22.2943 23.7043 21.403 23.0405 20.7459C22.3766 20.0888 21.4763 19.7196 20.5374 19.7196H13.4578C12.519 19.7196 11.6186 20.0888 10.9548 20.7459C10.2909 21.403 9.91797 22.2943 9.91797 23.2236V24.9756" stroke="#5564E7" strokeWidth="2.31818" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.9976 16.2131C18.9526 16.2131 20.5374 14.6445 20.5374 12.7096C20.5374 10.7746 18.9526 9.20605 16.9976 9.20605C15.0426 9.20605 13.4578 10.7746 13.4578 12.7096C13.4578 14.6445 15.0426 16.2131 16.9976 16.2131Z" stroke="#5564E7" strokeWidth="2.31818" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="17" cy="17" r="15.8409" stroke="#5564E7" strokeWidth="2.31818"/>
          <path d="M65 4L57 12L49 4" stroke="#5D6DF5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </div>} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    </NavDropdown>
      </Navbar.Collapse>
    </Navbar>    
      </div>
      </div>
      );
}

export default Header;

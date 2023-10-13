import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <>
        <header className='navbar'>
            <Link className='fs-18 fw-600 blue m-right-15' to='/'>
                Popular
            </Link>
            <Link className='fs-18 fw-600 blue' to='/battle'>
               Battle
            </Link>
        </header>
      </>
    );
  }
}


export default Header;
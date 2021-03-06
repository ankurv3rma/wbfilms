import React from 'react'
import Link from 'gatsby-link'

// import logoBlack from '../images/logo.png';
import logoOrange from '../images/logo-orange.png';
import logoWhite from '../images/logo-white.png';
import menuWhite from '../images/menu-white.png';
import menuBlack from '../images/menu-black.png';
import close from '../images/close.png';
import soon from '../images/soon.png';

class Header extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      menuOpen: false,
    };
  }

  componentDidMount = () => {
    if(this.props.fixed){
      this.setState({ fixed: true });
    }
    else {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      this.setState({ fixed: true });
    } else {
      this.setState({ fixed: false });
    }
  }

  toggleMenu = () => {
    const newState = !this.state.menuOpen;
    this.setState({ menuOpen: newState });
  }

  closeMenu = () => {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div  className={this.state.fixed || this.props.fixed ? 'header fixed' : 'header'}>
        <Link to="/" style={{ height: '100%' }}>
          <div className="logo">
            <img src={(this.state.fixed || this.state.menuOpen) ? logoOrange : logoWhite} alt="Logo" />
          </div>
        </Link>
        <div className='header-nav'>
          <Link className="header-link" activeClassName="header-link-active" to="/about">
            About Us
          </Link>
          {/* <Link disabled className="header-link disabled" activeClassName="header-link-active" to="#">
            <img className="header-link-soon short" src={soon} alt="coming-soon" />
            Films
          </Link>
          <Link disabled className="header-link disabled" activeClassName="header-link-active" to="#">
            <img className="header-link-soon long" src={soon} alt="coming-soon" />
            Investor Corner
          </Link> */}
          <div className="header-link disabled">
            <img className="header-link-soon short" src={soon} alt="coming-soon" />
            Films
          </div>
          <div className="header-link disabled">
            <img className="header-link-soon long" src={soon} alt="coming-soon" />
            Investor Corner
          </div>
          <Link className="header-link" activeClassName="header-link-active" to="/submit">
            Submit Film
          </Link>
        </div>
        <div className="header-nav-mobile">
          <a className="nav-link" onClick={this.toggleMenu}>
            <div id="nav-icon" className={this.state.menuOpen ? "open" : ""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <div className={this.state.menuOpen ? "menu-backdrop" : "menu-backdrop hidden"} onClick={this.closeMenu}></div>
          <div className={this.state.menuOpen ? "drawer" : "drawer hidden"}>
            {/* <a className="drawer-close" onClick={this.closeMenu}>
              <img src={close} alt="close" />
            </a> */}
            <Link className="header-link-mobile" activeClassName="header-link-active" to="/about">
              About Us
            </Link>
            {/* <Link className="header-link-mobile disabled" disabled activeClassName="header-link-active" to="#">
              Films
              <img className="header-link-soon" src={soon} alt="coming-soon" />
            </Link>
            <Link className="header-link-mobile disabled" disabled activeClassName="header-link-active" to="#">
              Investor Corner
              <img className="header-link-soon" src={soon} alt="coming-soon" />
            </Link> */}
            <div className="header-link-mobile disabled">
              Films
              <img className="header-link-soon" src={soon} alt="coming-soon" />
            </div>
            <div className="header-link-mobile disabled">
              Investor Corner
              <img className="header-link-soon" src={soon} alt="coming-soon" />
            </div>
            <Link className="header-link-mobile" activeClassName="header-link-active" to="/submit">
              Submit Film
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header

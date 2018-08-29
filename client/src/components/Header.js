import React, { Component} from "react";
import "./../css/Header.css";

class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="header-content">
          <span className="header-app-title">Koogle</span>
          <span className="header-app-category">Notes</span>
          <input className="header-search-bar" type="text" placeholder="Search"></input>
        </div>
      </div>
    );
  }
}

export default Header;

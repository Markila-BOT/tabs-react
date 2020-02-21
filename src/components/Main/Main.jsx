import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from '../../styledComponents';
import styled from 'styled-components';
import './Main.css';

const Nav = styled(Row)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #eceff1;
`;

class Main extends Component {
  render() {
    return (
      <Nav className="navbar">
        <Col size={1}>
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/"
          >
            Tab 1
          </NavLink>
        </Col>
        <Col size={1}>
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/tab2"
          >
            Tab 2
          </NavLink>
        </Col>
      </Nav>
    );
  }
}

export default Main;

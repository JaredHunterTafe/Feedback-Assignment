import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import Employees from './Employees'
import FeedbackForm from './FeedbackForm'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import CardGroup from 'react-bootstrap/CardGroup'
import bgimage from '../components/carousel2.jpg'





export default function App() {
  return (
    <Container>

      <Router>


        <Jumbotron>
          <h1><img src='https://www.service.nsw.gov.au/themes/snsw_theme/images/servicensw-logo.png' /></h1>
          <h1>Customer Feedback Form </h1>
        </Jumbotron>
        <nav>
          <Link type='button' className='btn btn-primary' to="/feedbackForm">Feedback</Link>
          <Link type='button' className='btn btn-primary float-right' to="/employees">Staff</Link>
        </nav>
        <Switch>
          <Route path="/Employees">
            <Employees />
          </Route>
          <Route path="/feedbackForm">
            <FeedbackForm />
          </Route>

        </Switch>
      </Router>
    </Container>

  );
}



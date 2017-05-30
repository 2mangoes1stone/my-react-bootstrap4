import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './components/Alert'
import { Button } from './components/Button'
import { Nav } from './components/Nav'
import { Link } from './components/Link'
import { BtnGroup } from './components/BtnGroup'
import { Card } from './components/Card'
import { CardImage } from './components/CardImage'
import { CardBlock } from './components/CardBlock'
import { CardFile } from './components/CardFile'
import { CardText } from './components/CardText'

class App extends Component {
  render() {
    return (
      <div>
        <div class="well">
          <Alert>
            <strong>Default Alert!!</strong>
          </Alert>

          <Alert alertType="danger">
            <strong>Danger Alert!</strong>DDDDAAAAAANGERRR.
          </Alert>

          <Alert alertType="warning">
            <strong>Warning Alert!</strong> WWWWAAAARRRNNNIIINNGG.
          </Alert>
        </div><br/>

        <div class="well">
          <Button>
            <strong>Default button!</strong>
          </Button>

          <Button buttonType="danger">
            <strong>Danger button!</strong>
          </Button>

          <Button buttonType="secondary">
            <strong>Secondary button!</strong>
          </Button>

          <Button buttonType="success">
            <strong>Success button!</strong>
          </Button>

          <Button buttonType="warning">
            <strong>Warning button!</strong>
          </Button>

          <Button buttonType="link">
            <strong>Link button!</strong>
          </Button>
        </div><br/>

        <div class="well">
          <Nav>
            <Link linkType="active">
                <strong>Active LINK!</strong>
            </Link>
            <Link>
                <strong>Normal LINK!</strong>
            </Link>
            <Link>
                <strong>Normal LINK!</strong>
            </Link>
            <Link linkType="disabled">
                <strong>Disabled LINK!</strong>
            </Link>
          </Nav>
        </div><br/><br/>

        <div class="well">
          <BtnGroup>
            <Button buttonType="primary">
              <strong>PRIMARY!</strong>
            </Button>
            <Button buttonType="danger">
              <strong>DANGER!</strong>
            </Button>
            <Button buttonType="success">
              <strong>SUCCESS!</strong>
            </Button>
          </BtnGroup>
        </div><br/><br/>

        <div class="well">
          <Card>
            <CardImage cardImage="http://placehold.it/350x150"></CardImage>
            <CardBlock>
              <CardFile>
                <strong>Card Title</strong>
              </CardFile>
              <CardText>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </CardText>
              <Button buttonType="primary">
                <strong>Go somewhere</strong>
              </Button>
            </CardBlock>
          </Card>
        </div>

      </div>
    );
  }
}

export default App;
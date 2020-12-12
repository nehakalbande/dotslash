import React from "react";
import { Jumbotron, Button, Container, Col, Row } from "reactstrap";
import logo from "./1.png";
import "./banner.css";

const Banner = (props) => {
  return (
    <React.Fragment>
      <Container className="container2">
        <Jumbotron style={{ backgroundColor: "#FFFFFF" }}>
          <div stlye={{}}>
            <Row>
              <Col>
                <h1 className="name">./ Community</h1>
                <p className="lead">
                  The Competitive Programing Community of IIIT, Nagpur
                </p>
                <hr className="my-2" />
                <p>
                  It uses utility classes for typography and spacing to space
                  content out within the larger container.
                </p>
                <br />
                <p className="lead">
                  <Button color="dark" href="/getstarted" className="bddd">
                    New To Programming?
                  </Button>
                  <Button color="dark" href="/contest/" className="bddd">
                    Upcoming Contests
                  </Button>
                </p>
              </Col>
              <Col xs="3" marginbottom="5px">
                <img src={logo} width="200px" className="bannerLogo" />
              </Col>
            </Row>
          </div>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
};

export default Banner;

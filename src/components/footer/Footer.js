import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const anchorss = [
  { ll: "https://www.google.com/", l2: faFacebook },
  { ll: "https://www.google.com/", l2: faGithub },
  { ll: "https://www.google.com/", l2: faInstagram },
  { ll: "https://www.google.com/", l2: faFacebook },
];

const links = [
  { href: "./contest", name: " Contest" },
  { href: "./getstarted", name: " Get Started" },
  { href: "", name: " Discussion" },
];

const Footer = () => {
  return (
    <footer>
      <div fluid style={{ backgroundColor: "#161718" }}>
        <Container fluid>
          <Container>
            <a id="goTop">
              <center className="circle" onclick="window.scrollTo(0,-1000000)">
                <FontAwesomeIcon
                  icon={faCode}
                  className="follow-icon"
                  alt="go Top"
                  onClick={scrollTop}
                  style={{ marginTop: "13px" }}
                />
              </center>
            </a>
            <Row className="roww">
              <Col className="coll">
                <h2>Contribute to these Community</h2>

                {anchorss.map((o, i) => {
                  return (
                    <a style={{ color: "white" }} href={o.ll}>
                      <FontAwesomeIcon icon={o.l2} className="follow-icon" />
                    </a>
                  );
                })}
                <p>
                  Developed & designed with by Web Dev Team ©2020 DotSlash
                  Community. All Rights Reserved.
                </p>
              </Col>
              <Col className="coll">
                <h2>Contacts</h2>
                <p>Address:</p>
                <p>Email:</p>
                <p>Phones:</p>
              </Col>
              <Col className="coll">
                <h2> Links:</h2>
                <ul>
                  {links.map((l, i) => {
                    return (
                      <li>
                        <a href={l.href} style={{ color: "white" }}>
                          {l.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

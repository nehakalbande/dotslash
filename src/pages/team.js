import React from "react";
import "./team.css";
import logo from "../components/homebody/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const members = [
  {
    logo: logo,
    insta: "",
    in: "",
    name: "mnkjnk",
    job: "jbkjbkj",
  },
  {
    logo: "",
    insta: "https://www.facebook.com",
    in: "",
    name: "jnhjkj",
    job: "gfffddd",
  },
  {
    logo: "",
    insta: "",
    in: "",
    name: "ccxxdx",
    job: "kljlk",
  },
  {
    logo: "",
    insta: "",
    in: "",
    name: "jhkjh",
    job: "fdtfdrx",
  },
  {
    logo: "",
    insta: "",
    in: "",
    name: "ytdtydrtd",
    job: "l;l,;,;",
  },
  {
    logo: "",
    insta: "",
    in: "",
    name: "joilj",
    job: "njknbjkl",
  },
];

const Team = (props) => {
  return (
    <div className="containerr1">
      {members.map((a, i) => (
        <div className="cards-wrapper">
          <div className="card2">
            <div className="card2-image">
              <img src={a.logo} />
            </div>
            <ul class="sociall-icons">
              <a href={a.insta}>
                <FontAwesomeIcon icon={faInstagram} className="follow-icon-1" />
              </a>
              <a href={a.in}>
                <FontAwesomeIcon icon={faLinkedin} className="follow-icon-1" />
              </a>
            </ul>

            <div className="details">
              <h2 style={{ textAlign: "center" }}>
                {a.name}
                <br />
                <p class="job">{a.job}</p>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;

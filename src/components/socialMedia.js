import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSpotify,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "./socialMedia.css"

export default function SocialMedia() {
  return (
    <div className="socialContainer">
      <h3 style={{color: '#bdd9cd'}}>socials</h3>
      <a
        href="https://www.linkedin.com/in/shanjng/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://open.spotify.com/user/1232668946?si=fd70b6c32fe249e2"
        className="spotify social"
      >
        <FontAwesomeIcon icon={faSpotify} size="2x" />
      </a>
    </div>
  )
}

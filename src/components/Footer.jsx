import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div className="Footer">
      <p>Created @Ziyad Hammad</p>

      <a href="https://github.com/ZiyadHammad" target="_blank">
        <FontAwesomeIcon icon={faGithub} id="git" />
        </a>
      
      

      <a href="https://www.linkedin.com/in/ziyad-hammad/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} id="link" />
      </a>
      
    </div>
  )
}

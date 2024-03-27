import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <>
    <footer>
      <a href="https://www.linkedin.com/in/victoria-aguilera-4a254b241/">
      <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.instagram.com/vickyaguidf/">
      <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://github.com/aguidefi">
      <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  </>
  )
}

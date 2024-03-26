import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <>
    <footer>
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faGithub} />
    </footer>
  </>
  )
}

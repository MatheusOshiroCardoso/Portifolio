import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/matheusoshiro">
          <BsLinkedin/>
          </a>
        </div>
        <div>
            <a href="https://www.facebook.com/matheus.cardoso.123829/">
            <FaFacebookF/></a>
        </div>
        <div>
            <a href="https://www.instagram.com/matheusocardoso/">
            <BsInstagram/></a>
        </div>

    </div>
  )
}

export default SocialMedia
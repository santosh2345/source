import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /> </a>

        <a href="https://web.telegram.org" target="_blank"><FaTelegram /> </a>


    </div>
  )
}

export default HeaderSocial
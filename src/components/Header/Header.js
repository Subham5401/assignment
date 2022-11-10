import React, { useState } from 'react';
import './headerstyle.css';
import aplogo from '../../assets/aplogo.png';
import contact from '../../assets/contact.svg';
import hamburger from '../../assets/hamburger.svg';
import lang from '../../assets/lang.svg';
import downArrow from '../../assets/downarrow.svg';

export default function Header(props) {
  return (
    <div className='header'>
      <div className='leftbar'>
        <div className='leftbar-item'>
          <img className='logo' src={aplogo} alt='AcharyPrashant' />
        </div>
        <div className='leftbar-item'>
          <a
            href='https://acharyaprashant.org'
            target='_blank'
            rel='noreferrer'
          >
            <span className='text'>Home</span>
          </a>
        </div>
        <div className='leftbar-item'>
          <a
            href='https://acharyaprashant.org'
            target='_blank'
            rel='noreferrer'
          >
            <span className='text'>Video Courses</span>
          </a>
        </div>
        <div className='leftbar-item'>
          <a
            href='https://acharyaprashant.org'
            target='_blank'
            rel='noreferrer'
          >
            <span className='text'>His Books</span>
          </a>
        </div>
        <div className='leftbar-item'>
          <a
            href='https://acharyaprashant.org'
            target='_blank'
            rel='noreferrer'
          >
            <span className='text'>Donate</span>
          </a>
        </div>
      </div>
      <div className='rightbar'>
        <div className='rightbar-item'>
          <div className='icon'>
            <img src={lang} alt='Language' style={{ paddingRight: '0.3rem' }} />
            <img src={downArrow} alt='select' />
          </div>
        </div>
        <div className='rightbar-item'>
          <a
            href='https://www.acharyaprashant.org'
            target='_blank'
            rel='noreferrer'
          >
            <img className='icon' src={contact} alt='contact' />
          </a>
        </div>
        <div className='rightbar-item'>
          <a
            href='https://www.acharyaprashant.org'
            target='_blank'
            rel='noreferrer'
            style={{ textDecoration: 'none' }}
          >
            <button className='button'>Donate</button>
          </a>
        </div>
        <div className='rightbar-item'>
          <div className='icon' onClick={() => props.setOpenMenu(true)}>
            <img
              src={hamburger}
              alt='menu'
              style={{ paddingRight: '0.5rem' }}
            />
            <span className='menu'>Menu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

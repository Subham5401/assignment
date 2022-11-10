import React from 'react';
import content from './footercontent.json';
import './footerstyle.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div>
        <div className='head'>
          <span>LIVE EVENTS</span>
        </div>
        <br />
        <div>
          {content[0].map((item) => (
            <div className='footer-item'>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='head'>
          <span>WISDOM CONTENT</span>
        </div>
        <br />
        <div>
          {content[1].map((item) => (
            <div className='footer-item'>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='head'>
          <span>MORE</span>
        </div>
        <br />
        <div>
          {content[2].map((item) => (
            <div className='footer-item'>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='head'>
          <span>SOCIAL MEDIA</span>
        </div>
        <br />
        <div className='sub-head'>
          <span>For English</span>
        </div>
        <div className='connect'>
          <div>
            <a
              href='https://www.youtube.com/c/AcharyaPrashant'
              target='_blank'
              rel='noreferrer'
            >
              <img src='youtube.svg' alt='youtube' className='icon' />
            </a>
          </div>
          <div>
            <a
              href='https://twitter.com/Prashant_Advait'
              target='_blank'
              rel='noreferrer'
            >
              <img src='twitter.svg' alt='twitter' />
            </a>
          </div>
          <div>
            <a
              href='https://www.facebook.com/AdvaitAcharyaPrashant'
              target='_blank'
              rel='noreferrer'
            >
              <img src='facebook.svg' alt='facebook' />
            </a>
          </div>
          <div>
            <a
              href='https://www.instagram.com/acharya_prashant_paf'
              target='_blank'
              rel='noreferrer'
            >
              <img src='insta.svg' alt='insta' />
            </a>
          </div>
          <div>
            <a
              href='https://en.wikipedia.org/wiki/Acharya_Prashant'
              target='_blank'
              rel='noreferrer'
            >
              <img src='wiki.svg' alt='wiki' />
            </a>
          </div>
        </div>
        <br />
        <div className='sub-head'>
          <span>For Hindi</span>
        </div>
        <div className='connect'>
          <div>
            <a
              href='https://www.youtube.com/c/ShriPrashant'
              target='_blank'
              rel='noreferrer'
            >
              <img src='youtube.svg' alt='youtube' />
            </a>
          </div>
          <div>
            <a
              href='https://twitter.com/Advait_Prashant'
              target='_blank'
              rel='noreferrer'
            >
              <img src='twitter.svg' alt='Twitter' />
            </a>
          </div>
          <div>
            <a
              href='https://www.facebook.com/Acharya.Prashant.Advait'
              target='_blank'
              rel='noreferrer'
            >
              <img src='facebook.svg' alt='facebook' />
            </a>
          </div>
          <div>
            <a
              href='https://www.instagram.com/acharya_prashant_ap/'
              target='_blank'
              rel='noreferrer'
            >
              <img src='insta.svg' alt='insta' />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className='head'>
          <span>DOWNLOAD APP</span>
        </div>
        <br />
        <div className='aplogo'>
          <img src='aplogo.png' alt='Acharya Prashant' />
          <div>
            <span>Acharya Prashant</span>
          </div>
        </div>
        <br />
        <div>
          <a
            href='https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='ic_googleplay.png'
              alt='Get it on Google Play'
              className='label'
            />
          </a>
        </div>
        <br />
        <div>
          <a
            href='https://apps.apple.com/in/app/acharya-prashant/id1603611866'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='ic_appstore.png'
              alt='Download on the App Store'
              className='label'
            />
          </a>
        </div>
      </div>
      <div>
        <div className='head'>
          <span>CONTACT US</span>
        </div>
        <br />
        <div className='footer-contact'>
          <div>
            <img src='envelope.svg' alt='contact' />
          </div>
          <a
            href='mailto:support@advait.org.in'
            target='_blank'
            rel='noreferrer'
          >
            <div>
              <span>support@advait.org</span>
            </div>
          </a>
        </div>
        <div className='footer-contact'>
          <div>
            <img src='wa.svg' alt='WA' />
          </div>
          <a
            href='https://wa.me/+919643750710'
            target='_blank'
            rel='noreferrer'
          >
            <div>
              <span>+91 9650585100</span>
            </div>
          </a>
        </div>
        <div className='footer-contact'>
          <div>
            <img src='phone.svg' alt='WA' />
          </div>
          <a href='tel:+919650585100' target='_blank' rel='noreferrer'>
            <div>
              <span>+91 9650585100</span>
            </div>
          </a>
        </div>
        <div className='contacts'>
          <a
            href='https://acharyaprashant.org/en/enquiry'
            target='_blank'
            rel='noreferrer'
          >
            <div className='contact-form'>
              <span>Fill Form To Connect</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import content from './modalContent.json';
import './modaltinystyle.css';

export default function ModalTiny(props) {
  const closeModal = () => {
    props.setOpenMenu(false);
  };

  return (
    <div className='tiny-modal'>
      <div className='head'>
        <div className='head-logo'>
          <img
            src='aplogo.png'
            alt='logo'
            className='logo'
            style={{ width: '2rem', height: '2rem', marginLeft: '1.5rem' }}
          />
        </div>
        <div className='close' onClick={closeModal}>
          <img src='close.svg' alt='close' />
        </div>
      </div>
      <div>
        <div>
          <div className='content'>
            <ul>
              {content[0].map((item) => (
                <a href={item[1]} target='_blank' rel='noreferrer'>
                  <li>{item[0]}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className='border'></div>
        </div>
        <br />
        <div>
          <div className='tiny-modal-heading'>
            <span>More</span>
          </div>
          <div className='content'>
            <ul>
              {content[1].map((item) => (
                <a href={item[1]} target='_blank' rel='noreferrer'>
                  <li>{item[0]}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className='border'></div>
        </div>
        <br />
        <div>
          <div className='tiny-modal-heading'>
            <span>Explore Categories</span>
          </div>
          <div className='content'>
            <ul>
              {content[2].map((item) => (
                <a href={item[1]} target='_blank' rel='noreferrer'>
                  <li>{item[0]}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className='border'></div>
        </div>
        <div>
          <div className='content'>
            <ul>
              <a
                href='https://acharyaprashant.org'
                target='_blank'
                rel='noreferrer'
              >
                <li>Technical Support</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

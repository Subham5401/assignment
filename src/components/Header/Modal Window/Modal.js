import React from 'react';
import './modalstyle.css';
import close from '../../../assets/close.svg';
import avatar from '../../../assets/avatar.svg';
import content from './modalContent.json';

export default function Modal(props) {
  const closeModal = () => {
    props.setOpenMenu(false);
  };

  return (
    <div className='modal-bg'>
      <div className='close' onClick={closeModal}>
        <img src={close} alt='close-icon' />
      </div>
      <div>
        <div className='modal'>
          <div>
            <div className='login'>
              <div>
                <img src={avatar} alt='avatar' />
              </div>
              <div>
                <span className='login-text'>Login</span>
              </div>
            </div>
            <div className='border'></div>
          </div>
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
            <div className='heading'>
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
            <div className='heading'>
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
    </div>
  );
}

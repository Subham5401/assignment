import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Header/Modal Window/Modal';
import ModalTiny from './components/Header/Modal Window/ModalTiny';
import Content from './containers/Main Content/Content';
import Tag from './containers/Other Content/Tag';
import Faq from './containers/FAQ/Faq';

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  window.onresize = () => {
    if (window.matchMedia('screen and (max-width:768px)').matches) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  return (
    <div className='App'>
      <div>
        <Header setOpenMenu={setOpenMenu} />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Tag />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        {openMenu ? (
          !smallScreen ? (
            <Modal setOpenMenu={setOpenMenu} />
          ) : (
            <ModalTiny setOpenMenu={setOpenMenu} />
          )
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

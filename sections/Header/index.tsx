import React from 'react';
// @ts-ignore
import styles from './index.module.scss';
// @ts-ignore
import logoWhite from '../../static/logo-white.svg';

import { headerMenu, headerSubMenu } from './toolkit';

const Header = () => {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logoWhite} />
          </div>
          <div className={styles.nav}>
            {headerMenu.map((item, i) => {
              let _interval = 0;
              if (i !== 0) _interval = 44;
              return (
                <span
                  className="center"
                  style={{ marginLeft: `${_interval}px` }}
                >
                  {item.label}
                </span>
              );
            })}
          </div>
          <div className={styles.sub_nav}>
            {headerSubMenu.map((item, i) => {
              let _interval = 0;
              if (i !== 0) _interval = 44;
              return (
                <span
                  className="center"
                  style={{ marginLeft: `${_interval}px` }}
                >
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

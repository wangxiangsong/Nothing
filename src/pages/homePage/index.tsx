import { FC, useEffect, useState } from 'react';
import styles from './index.module.less';

const HomePages: FC = () => {
  return (
    <div className={styles['homePage']}>
      <div className={styles['homePage_title']}>
        <span></span>
        常用功能
      </div>
      <div className={styles['homePage_content']}></div>
    </div>
  );
};

export default HomePages;

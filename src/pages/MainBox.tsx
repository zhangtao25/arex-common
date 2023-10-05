// import { css } from '@emotion/react';

import AppFooter from '../app/Footer.tsx';
import AppHeader from '../app/Header.tsx';
import AppPaneLayout from '../app/PaneLayout.tsx';
import AppSidenav from '../app/Sidenav.tsx';
import MainTabs from '../libs/MainTabs.tsx';

const MainBox = () => {
  return (
    <div>
      <AppHeader />
      <AppPaneLayout
        layoutId={'pane-layout'}
        vertical={false}
        height={'calc(100vh - 88px)'}
        primary={<AppSidenav />}
        secondary={<MainTabs environments={[]} />}
      />
      <AppFooter />
    </div>
  );
};

export default MainBox;

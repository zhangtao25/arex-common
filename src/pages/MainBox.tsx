import AppFooter from '../app/Footer.tsx';
import AppHeader from '../app/Header.tsx';
import AppPaneLayout from '../app/PaneLayout.tsx';
import AppSidenav from '../app/Sidenav.tsx';
import MainPanes from '../libs/MainPanes.tsx';
import { mockEnvironments, mockMenus, mockPanes } from '../mock.tsx';
const MainBox = () => {
  function addTab() {

  }
  function removeTab() {

  }
  const handlePanesEdit: any = (targetKey: string, action: 'add' | 'remove') => {
    action === 'add' ? addTab() : removeTab(targetKey);
  };

  const panes = mockPanes;
  const environments = mockEnvironments;
  const menus = mockMenus;

  function onSelectMenu() {}

  function onSelectPane() {}

  function onSelectEnvironment() {}

  const activePanes = '';
  const activeMenu = '';
  const activeEnvironment = '';
  return (
    <div>
      <AppHeader />
      <AppPaneLayout
        layoutId={'pane-layout'}
        vertical={false}
        height={'calc(100vh - 88px)'}
        primary={<AppSidenav activeMenu={activeMenu} menus={menus} onSelectMenu={onSelectMenu} />}
        secondary={
          <MainPanes
            onEdit={handlePanesEdit}
            activePane={activePanes}
            panes={panes}
            activeEnvironment={activeEnvironment}
            environments={environments}
            onSelectPane={onSelectPane}
            onSelectEnvironment={onSelectEnvironment}
          />
        }
      />
      <AppFooter />
    </div>
  );
};

export default MainBox;

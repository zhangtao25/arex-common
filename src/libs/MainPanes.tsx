import Icon, { ExclamationCircleFilled } from '@ant-design/icons';
import { css } from '@emotion/react';
import { App, Select, theme } from 'antd';
import { FC, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import DraggableTabs from './DraggableTabs';

// import { MenuTypeEnum, PageTypeEnum } from '../../constant';
// import { treeFind } from '../../helpers/collection/util';
// import { getMethodLabelColorClassOf } from '../../helpers/rest/labelColoring';
// import { useCustomNavigate } from '../../router/useCustomRouter';
// import { MainContext } from '../../store/content/MainContent';
// import DraggableTabs from '../DraggableTabs';
// import IconsEnvironment from '../icons/Environment';
// import Environment from './Environment.tsx';
// import FolderPane from './FolderPane';
// import Request from './Request.tsx';
// import RunPane from './RunPane';
const { useToken } = theme;
const RequestTabTitle: FC<{ method: string; name: string }> = ({ method, name }) => {
  return (
    <div>
      <span
        css={css`
          color: ${'#d9d9d9'};
        `}
      >
        {method}
      </span>
      <span
        css={css`
          margin-left: 8px;
        `}
      >
        {name}
      </span>
    </div>
  );
};

interface MainPanesProps {
  environments: any[];
}
const MainPanes: FC<MainPanesProps> = ({ environments = [] }) => {
  const { message, modal } = App.useApp();
  const showConfirm = ({ edited }: any) => {
    const { confirm } = modal;
    return new Promise((resolve, reject) => {
      if (edited) {
        confirm({
          title: 'Do you want save',
          icon: <ExclamationCircleFilled />,
          content:
            'This tab has unsaved changes which will be lost if you choose to close it. Save these changes to avoid losing your work.',
          onOk() {
            resolve('');
          },
          onCancel() {
            reject('');
          },
        });
      } else {
        resolve('');
      }
    });
  };
  const nav = useNavigate();
  const params = useParams();
  // const customNavigate = useCustomNavigate();
  // const { dispatch, store } = useContext(MainContext);
  // const {
  //   panes,
  //   activeMenu,
  //   activeEnvironment,
  //   environments,
  //   collectionTreeData,
  // } = store.globalState;
  const removeTab = (targetKey: string) => {};
  const addTab = () => {
    console.log();
  };
  const handleTabsEdit: any = (targetKey: string, action: 'add' | 'remove') => {
    action === 'add' ? addTab() : removeTab(targetKey);
  };
  const { token } = useToken();
  return (
    <div>
      <DraggableTabs
        activeKey={''}
        onChange={(activePane) => {}}
        onEdit={handleTabsEdit}
        size='small'
        type='editable-card'
        tabBarGutter={-1}
        items={[
          {
            label: 'Request',
            key: 'r',
            children: <div>Request</div>,
          },
          {
            label: 'Request',
            key: '2',
            children: <div>Request</div>,
          },
          {
            label: 'Request',
            key: '3',
            children: <div>Request</div>,
          },
        ]}
        tabBarExtraContent={
          <Select
            size={'small'}
            css={css`
              border-left: 1px solid ${token.colorSplit};
            `}
            value={'activeEnvironment'}
            bordered={false}
            style={{
              width: '180px',
              padding: '4px',
              marginRight: '10px',
            }}
            options={[
              ...environments.map(({ key, value }) => ({ label: key, value })),
              { label: 'No environment', value: 'No environment' },
            ]}
            onSelect={(value) => {}}
          />
        }
      />
    </div>
  );
};

export default MainPanes;

import Icon from '@ant-design/icons';

import IconsCollection from '../icons/Collection.tsx';
import IconsEnvironment from '../icons/Environment.tsx';
import CollectionMenus from '../menus/Collection.tsx';
import EnvironmentMenus from '../menus/Environment.tsx';
import SmartLink from '../smart/Link.tsx';
import {css} from "@emotion/react";

const AppSidenav = () => {
  return (
    <div css={css`height: 100%`}>
      <SmartLink
        defaultValue={'MenuTypeEnum.Collection'}
        items={[
          {
            label: 'Collection',
            icon: <Icon component={IconsCollection} />,
            key: 'MenuTypeEnum.Collection',
            children: <CollectionMenus />,
          },
          {
            label: 'Environment',
            icon: <Icon component={IconsEnvironment} />,
            key: 'MenuTypeEnum.Environment',
            children: <EnvironmentMenus />,
          },
        ]}
      />
    </div>
  );
};

export default AppSidenav;

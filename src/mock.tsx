import CollectionMenus from './menus/Collection.tsx';
import EnvironmentMenus from './menus/Environment.tsx';
import Environment from './panes/Environment.tsx';
import Request from './panes/Request.tsx';

export const mockPanes = [
  {
    key: '1',
    title: 'request',
    pageType: 'request',
    rawId: '1',
    menuType: 'collection',
    edited: false,
    component: <Request />,
  },
  {
    key: '1',
    title: 'environment',
    pageType: 'environment',
    rawId: '1',
    menuType: 'environment',
    edited: false,
    component: <Environment />,
  },
];

export const mockEnvironments = [
  {
    key: '1',
    name: 'test',
    variable: [
      {
        key: '1',
        value: '1',
      },
    ],
  },
];

export const mockMenus = [
  {
    key: 'collection',
    label: 'collection',
    component: <CollectionMenus />,
  },
  {
    key: 'environment',
    label: 'collection',
    component: <EnvironmentMenus />,
  },
];

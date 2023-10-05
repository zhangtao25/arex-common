// import Login from '../pages/login';
import MainBox from '../pages/MainBox';
// import Welcome from '../pages/welcome';

const router = [
  // {
  //   path: '/',
  //   element: <MainBox />,
  // },
  {
    path: '/:workspaceID/workspace/:workspaceName/:paneType/:paneId',
    element: <MainBox />,
  },
];
export default router;

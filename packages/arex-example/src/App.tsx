import { Button, ConfigProvider } from 'antd';
import { CollectionsSaveRequest } from 'arex-common';
import { useState } from 'react';

import treeData from './mock.json';

const App = () => {
  const [open, setOpen] = useState(true);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <Button
        onClick={() => {
          // @ts-ignore
          window.__locale__ = 'cn';
        }}
      >
        切换语言
      </Button>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Save As
      </Button>
      {/*treeData是postman类型，需要转一下*/}
      <CollectionsSaveRequest
        // @ts-ignore
        treeData={treeData}
        open={open}
        requestName={''}
        onCreateFolder={() => {
          return new Promise((resolve) => {
            resolve('onCreateFolder');
          });
        }}
        onSave={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('onSave');
            }, 1000);
          });
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
    </ConfigProvider>
  );
};

export default App;

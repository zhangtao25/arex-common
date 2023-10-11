import { Allotment } from 'allotment';
import { Button, ConfigProvider } from 'antd';
import { CollectionsSaveRequest } from 'arex-common';
import { useState } from 'react';

// const { darkAlgorithm } = theme;
import treeData from './mock.json';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
        // algorithm: [darkAlgorithm],
      }}
    >
      <Allotment></Allotment>
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
        locale={'cn'}
        // @ts-ignore
        treeData={treeData}
        open={open}
        requestName={''}
        onCreateFolder={() => {
          return new Promise((resolve) => {
            resolve('ss');
          });
        }}
        onSave={(folderKey, requestName) => {
          console.log(folderKey, requestName);
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
    </ConfigProvider>
  );
};

export default App;

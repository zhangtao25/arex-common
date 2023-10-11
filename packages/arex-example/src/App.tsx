import { Button } from 'antd';
import { CollectionsSaveRequest } from 'arex-common';
import { useState } from 'react';

// import SaveRequestModal from '@/libs/components/SaveRequest.tsx';
import treeData from './mock.json';

const App = () => {
  const [open, setOpen] = useState(true);


  return (
    <div>
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
    </div>
  );
};

export default App;

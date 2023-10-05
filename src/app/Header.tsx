import { css } from '@emotion/react';
import { Select } from 'antd';
// import * as constants from "constants";
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const [workspaceID, setWorkspaceID] = useState('1000066666');
  const nav = useNavigate();
  useEffect(() => {
    nav(`/${workspaceID}/workspace/${workspaceID}/request/1000000000`);
  }, [workspaceID]);
  return (
    <div
      css={css`
        height: 48px;
        border-bottom: 1px solid #d9d9d9;
        display: flex;
        align-items: center;
      `}
    >
      AppHeader
      <Select
        value={workspaceID}
        onSelect={(value) => {
          setWorkspaceID(value);
        }}
        css={css`
          width: 180px;
        `}
        options={[
          {
            label: '朱雀',
            value: '1000066666',
          },
          {
            label: '玄武',
            value: '1000088888',
          },
        ]}
      />
    </div>
  );
};

export default AppHeader;

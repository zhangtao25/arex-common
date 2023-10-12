import { FolderOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { FC } from 'react';

import { ItemType, RequestColors } from '../token.ts';

const RequestDisplay: FC<{
  request: { method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' };
  name: string;
}> = ({ request, name }) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <span
        css={css`
          margin-right: 8px;
          color: ${RequestColors[request.method]};
        `}
      >
        {request.method}
      </span>
      <span>{name}</span>
    </div>
  );
};
const FolderDisplay: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <FolderOutlined
        css={css`
          margin-right: 8px;
        `}
      />
      {name}
    </div>
  );
};
const ExampleDisplay: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <span
        css={css`
          margin-right: 6px;
          border: 1px solid;
          font-size: 12px;
          line-height: 12px;
          color: rgba(0, 0, 0, 0.65);
        `}
      >
        case
      </span>
      {name}
    </div>
  );
};
// itemType key
const RequestItemDisplay: FC<{
  itemType: ItemType;
  request: { method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' } | undefined;
  name: string;
}> = ({ itemType, request, name }) => {
  return (
    <div>
      {itemType === ItemType.REQUEST && request && <RequestDisplay name={name} request={request} />}
      {itemType === ItemType.FOLDER && <FolderDisplay name={name} />}
      {itemType === ItemType.EXAMPLE && <ExampleDisplay name={name} />}
    </div>
  );
};
export default RequestItemDisplay;

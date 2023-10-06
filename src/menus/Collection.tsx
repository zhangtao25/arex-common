import { DownOutlined, FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Input, Spin, Tree, TreeProps } from 'antd';
import { useState } from 'react';

const CollectionMenus = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);

  const onExpand: any = (newExpandedKeys: string[]) => {};

  const handleSelect = (keys: any, info: any) => {};

  // 树拖拽
  const onDrop: TreeProps['onDrop'] = (info: any) => {};

  const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
  ];

  return (
    <div
      css={css`
        padding-right: 12px;
      `}
    >
      <div
        className={'collection-header'}
        css={css`
          display: flex;
          padding-top: 12px;
          padding-bottom: 12px;
        `}
      >
        <span
          onClick={() => {}}
          css={css`
            cursor: pointer;
            width: 24px;
          `}
        >
          <PlusOutlined />
        </span>

        <Input
          className={'collection-header-search'}
          size='small'
          placeholder=''
          prefix={<FilterOutlined />}
          onChange={onChange}
        />
      </div>
      <Spin spinning={false}>
        <Tree
          motion={false}
          css={css`
            min-height: 40vh;
          `}
          showLine={true}
          blockNode={true}
          defaultExpandAll={true}
          selectedKeys={[]}
          // expandedKeys={expandedKeys}
          autoExpandParent={false}
          onExpand={onExpand}
          onSelect={handleSelect}
          switcherIcon={<DownOutlined />}
          treeData={treeData}
          draggable={{ icon: false }}
          onDrop={onDrop}
        />
      </Spin>

      {/*弹框*/}
    </div>
  );
};

export default CollectionMenus;

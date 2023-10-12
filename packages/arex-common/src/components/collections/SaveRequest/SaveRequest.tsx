import { FolderOutlined, SearchOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Breadcrumb, Button, Input, InputRef, Modal, Space, Spin, theme, Typography } from 'antd';
import { FC, useMemo, useRef, useState } from 'react';

import { findNodeByKey, findPathByKey, searchNodes } from '../../../helpers';
import { useTranslation } from '../../../useTranslation.ts';
import MatchRow from '../../../widgets/MatchRow.tsx';
import RequestItemDisplay from '../../../widgets/RequestItemDisplay.tsx';
import SaveRequestDivider from '../../../widgets/SaveRequestDivider.tsx';
import SaveRequestMainBox from '../../../widgets/SaveRequestMainBox.tsx';
import { CollectionsSaveRequestProps } from './types.ts';

const { Text } = Typography;
const { useToken } = theme;
interface FooterProps {
  onClose: () => void;
  onSave: () => void;
  onNewFolder: () => void;
}
const Footer: FC<FooterProps> = ({ onClose, onSave, onNewFolder }) => {
  const token = useToken();
  const { t } = useTranslation();
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          color: ${token.token.colorTextSecondary};
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        `}
        onClick={() => {
          onNewFolder();
        }}
      >
        {t('new.folder')}
      </div>

      <Space>
        <Button type={'primary'} onClick={onSave}>
          {t('save')}
        </Button>
        <Button
          onClick={() => {
            onClose();
          }}
        >
          {t('cancel')}
        </Button>
      </Space>
    </div>
  );
};

/*
参数解释
open:是否打开
requestName:请求名称
treeData:树形结构数据
onSave:保存
onCreateFolder:创建文件夹
onClose:关闭
allowTypes:允许选择的类型
 */
const CollectionsSaveRequest: FC<CollectionsSaveRequestProps> = ({
  title,
  open,
  treeData,
  requestName,
  onCreateFolder,
  onSave,
  onClose,
  allowTypes = [1, 3],
}) => {
  const [newFolderMode, setNewFolderMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const requestNameInputRef = useRef<InputRef>(null);
  const folderNameInputRef = useRef<InputRef>(null);
  const { t } = useTranslation();
  const [selectedKey, setSelectedKey] = useState<string | undefined>(undefined);
  const selectedTreeData = useMemo(() => {
    // 这里不能引用传递
    let temp: any = [];
    if (selectedKey) {
      temp = findNodeByKey(treeData, selectedKey)?.item || treeData;
    } else {
      temp = treeData;
    }
    if (loading) {
      return temp.concat({ name: 'added', key: 'added', added: true });
    }
    return temp;
  }, [treeData, selectedKey, loading]);

  const [searchValue, setSearchValue] = useState('');

  const searchedTreeData = useMemo(() => {
    if (!searchValue) {
      return [];
    }
    return searchNodes(treeData, searchValue, allowTypes);
  }, [searchValue]);
  return (
    <Modal
      centered
      title={title || t('save.request')}
      width={650}
      open={open}
      footer={
        <Footer
          onNewFolder={() => {
            setNewFolderMode(true);
          }}
          onClose={onClose}
          onSave={() => {
            onSave(selectedKey || '', requestNameInputRef?.current?.input?.value || '');
          }}
        />
      }
      closeIcon={false}
      onCancel={() => {
        onClose();
      }}
    >
      <div
        css={css`
          margin-bottom: 20px;
        `}
      >
        <Text
          type={'secondary'}
          strong
          css={css`
            display: block;
            padding: 10px 0;
          `}
        >
          {t('save.name')}
        </Text>
        <Input defaultValue={requestName} ref={requestNameInputRef} />
      </div>

      <Space
        css={css`
          margin-bottom: 10px;
        `}
      >
        <span
          css={css`
            color: rgb(107, 107, 107);
            font-weight: 500;
          `}
        >
          {t('save.to')}
        </span>
        <span
          css={css`
            color: rgb(166, 166, 166);
            display: flex;
          `}
        >
          {/*这块必须要改*/}
          {selectedKey ? (
            <Breadcrumb
              items={[
                { name: 'root', key: 'root' },
                ...(findPathByKey(treeData, selectedKey) || []),
              ].map((i, index) => {
                if (
                  index <
                  [{ name: 'root', key: 'root' }, ...(findPathByKey(treeData, selectedKey) || [])]
                    .length -
                    1
                ) {
                  return {
                    title: (
                      <span
                        css={css`
                          &:hover {
                            text-decoration: underline;
                            cursor: pointer;
                          }
                        `}
                      >
                        {i.name}
                      </span>
                    ),
                    onClick: () => setSelectedKey(i.key),
                  };
                }
                return { title: i.name };
              })}
            />
          ) : (
            <Text type={'secondary'}>{t('select.folder')}</Text>
          )}
        </span>
      </Space>

      <Input
        placeholder={t('search.folder')}
        prefix={<SearchOutlined />}
        value={searchValue}
        onChange={(v) => {
          setSearchValue(v.target.value);
        }}
      />

      <SaveRequestDivider />
      <SaveRequestMainBox>
        {/*新增文件夹模式*/}
        {newFolderMode && (
          <Space
            css={css`
              padding: 6px 10px;
            `}
          >
            <FolderOutlined />
            <Input
              ref={folderNameInputRef}
              placeholder={t('folder.name')}
              size={'small'}
              css={css`
                width: 420px;
              `}
            />
            <Button
              size={'small'}
              onClick={() => {
                setLoading(true);
                setNewFolderMode(false);
                onCreateFolder(
                  folderNameInputRef?.current?.input?.value || '',
                  selectedKey || '',
                ).then((folderID) => {
                  setSelectedKey(folderID);
                  setLoading(false);
                });
              }}
            >
              Create
            </Button>
            <Button size={'small'}>Cancel</Button>
          </Space>
        )}

        {/*分模式*/}
        {/*普通模式*/}
        {!searchValue &&
          selectedTreeData.map((item: any, index: any) => {
            return (
              <MatchRow
                allowTypes={allowTypes}
                record={item}
                key={index}
                onClick={() => {
                  setSelectedKey(item.key);
                }}
              >
                <Spin spinning={Boolean(item.added)}>
                  <RequestItemDisplay
                    itemType={item.type}
                    name={item.name}
                    request={item.request}
                  />
                </Spin>
              </MatchRow>
            );
          })}
        {/*搜索模式*/}
        {searchValue &&
          searchedTreeData.map((item: any, index: any) => {
            return (
              <MatchRow
                allowTypes={allowTypes}
                record={item}
                key={index}
                onClick={() => {
                  setSelectedKey(item.key);
                  setSearchValue('');
                }}
              >
                <div
                  css={css`
                    display: flex;
                  `}
                >
                  <FolderOutlined
                    css={css`
                      margin-right: 8px;
                    `}
                  />
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      line-height: 1.2;
                      font-size: 13px;
                      justify-content: center;
                    `}
                  >
                    <span>{item.name}</span>
                    <div
                      css={css`
                        width: 520px;
                        color: #999999;
                        overflow: hidden; //超出的文本隐藏
                        text-overflow: ellipsis; //溢出用省略号显示
                        white-space: nowrap; //溢出不换行
                      `}
                    >
                      {item.path}
                    </div>
                  </div>
                </div>
              </MatchRow>
            );
          })}
      </SaveRequestMainBox>
    </Modal>
  );
};

export default CollectionsSaveRequest;

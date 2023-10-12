import { TreeNode } from '../../../token.ts';

export type CollectionsSaveRequestProps = {
  title?: string;
  open: boolean;
  requestName: string;
  treeData: TreeNode[];
  onSave: (folderKey: string, requestName: string) => Promise<void>;
  onCreateFolder: (newFolderName: string, parentFolderKey: string) => Promise<string>;
  onClose: () => void;
  allowTypes?: number[];
};

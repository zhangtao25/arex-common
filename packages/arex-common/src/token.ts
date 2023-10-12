export enum RequestColors {
  GET = '#007F31',
  POST = '#AD7A03',
  PUT = '#0053B8',
  PATCH = '#623497',
  DELETE = '#8E1A10',
}

export enum RequestMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum ItemType {
  REQUEST = 1,
  EXAMPLE = 2,
  FOLDER = 3,
}

export interface TreeNode {
  key: string;
  name: string;
  type: number;
  item?: TreeNode[]; // 递归定义，用于表示子节点
  request?: {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  };
}

//颜色配置

export enum BgColors {
  system = 'system',
  light = 'light',
  dark = 'dark',
}

export enum AccentColors {
  green = '#10b981',
  teal = '#14b8a6',
  blue = '#3b82f6',
  indigo = '#6366f1',
  purple = '#8b5cf6',
  yellow = '#f59e0b',
  orange = '#f97316',
  red = '#ef4444',
  pink = '#ec4899',
}

export enum Locales {
  cn = 'cn',
  en = 'en',
  ko = 'ko',
  ja = 'ja',
}

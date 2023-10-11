import {ReactNode} from "react";

export type AppPaneLayoutProps = {
  primary: ReactNode;
  secondary: ReactNode;
  vertical: boolean;
  height: string;
  layoutId: string;
}

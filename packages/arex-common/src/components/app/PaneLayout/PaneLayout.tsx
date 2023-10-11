import 'allotment/dist/style.css';

import { css } from '@emotion/react';
import { Allotment } from 'allotment';
import { FC } from 'react';

import { AppPaneLayoutProps } from './types.ts';

const AppPaneLayout: FC<AppPaneLayoutProps> = ({
  primary,
  secondary,
  height,
  vertical,
  layoutId,
}) => {
  let initPanePrimarySize = 25;
  let initPaneSecondarySize = 75;
  const storageKey = `${layoutId}-pane-config-${vertical ? 'vertical' : 'horizontal'}`;
  const paneEvent = localStorage.getItem(storageKey);

  try {
    if (paneEvent) {
      initPanePrimarySize = JSON.parse(paneEvent)[0].size - 0;
      initPaneSecondarySize = JSON.parse(paneEvent)[1].size - 0;
    }
  } catch (e) {
    console.log();
  }

  return (
    <Allotment
      css={css`
        height: ${height};
      `}
      vertical={vertical}
      onChange={(rawSizes: any) => {
        const all = rawSizes.reduce((acc: any, cur: any) => acc + cur, 0);
        const sizes = rawSizes.map((size: any) => (size / all) * 100);
        const type = vertical ? 'vertical' : 'horizontal';
        const storageKey = `${layoutId}-pane-config-${type}`;
        localStorage.setItem(
          storageKey,
          JSON.stringify(sizes.map((size: any) => ({ min: 0, max: 100, size }))),
        );
      }}
    >
      <Allotment.Pane preferredSize={`${initPanePrimarySize}%`}>{primary}</Allotment.Pane>
      <Allotment.Pane preferredSize={`${initPaneSecondarySize}%`}>{secondary}</Allotment.Pane>
    </Allotment>
  );
};

export default AppPaneLayout;

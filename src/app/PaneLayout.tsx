import { css } from '@emotion/react';
import { Allotment } from 'allotment';
import { FC, ReactNode, useState } from 'react';

interface AppPaneLayoutProps {
  primary: ReactNode;
  secondary: ReactNode;
  vertical: boolean;
  height: string;
  layoutId: string;
}
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
  } catch (e) {}

  const [panePrimarySize, setPanePrimarySize] = useState(initPanePrimarySize);
  const [paneSecondarySize, setPaneSecondarySize] = useState(initPaneSecondarySize);

  return (
    <Allotment
      css={css`
        height: ${height};
      `}
      vertical={vertical}
      onChange={(rawSizes) => {
        const all = rawSizes.reduce((acc, cur) => acc + cur, 0);
        const sizes = rawSizes.map((size) => (size / all) * 100);
        const type = vertical ? 'vertical' : 'horizontal';
        const storageKey = `${layoutId}-pane-config-${type}`;
        localStorage.setItem(
          storageKey,
          JSON.stringify(sizes.map((size) => ({ min: 0, max: 100, size }))),
        );
      }}
    >
      <Allotment.Pane preferredSize={`${panePrimarySize}%`}>{primary}</Allotment.Pane>
      <Allotment.Pane preferredSize={`${paneSecondarySize}%`}>{secondary}</Allotment.Pane>
    </Allotment>
  );
};

export default AppPaneLayout;

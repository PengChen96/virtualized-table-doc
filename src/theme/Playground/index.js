/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import usePrismTheme from '@theme/hooks/usePrismTheme';
import styles from './styles.module.css';

function Header({children}) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function ResultWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.预览"
          description="The result label of the live codeblocks">
          预览
        </Translate>
      </Header>
      <div className={styles.playgroundPreview}>
        <LivePreview/>
        <LiveError/>
      </div>
    </>
  );
}

function EditorWithHeader() {
  const [unfold, setUnfold] = React.useState(false);
  return (
    <>
      <Header>
        <span>
          <Translate
            id="theme.Playground.源码"
            description="The live editor label of the live codeblocks">
            源码
          </Translate>
        </span>
        <span
          className={styles.playgroundHeaderUnfoldBtn}
          onClick={() => setUnfold(!unfold)}
        >
          <Translate
            id="theme.Playground.点击展开或收拢"
            description="The live editor label of the live codeblocks">
            点击展开或收拢
          </Translate>
        </span>
      </Header>
      {
        unfold && <LiveEditor className={styles.playgroundEditor}/>
      }
    </>
  );
}

export default function Playground({children, transformCode, ...props}) {
  const {
    isClient,
    siteConfig: {
      themeConfig: {
        liveCodeBlock: {playgroundPosition},
      },
    },
  } = useDocusaurusContext();
  const prismTheme = usePrismTheme();

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        key={isClient}
        code={isClient ? children.replace(/\n$/, '') : ''}
        transformCode={transformCode || ((code) => `${code};`)}
        theme={prismTheme}
        {...props}>
        {playgroundPosition === 'top' ? (
          <>
            <ResultWithHeader/>
            <EditorWithHeader/>
          </>
        ) : (
          <>
            <EditorWithHeader/>
            <ResultWithHeader/>
          </>
        )}
      </LiveProvider>
    </div>
  );
}

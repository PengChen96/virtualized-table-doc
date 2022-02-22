/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {VTablePro} from 'virtualized-table';
import {generateColumns, generateData} from "./utils";
import {ResizableCell} from './components/ResizableCell'
import './components/ResizableCell/column-resize.css'
import {DndProvider} from 'react-dnd';
import {DraggableBodyRow} from './components/DragableBodyRow';
import Backend from 'react-dnd-html5-backend/lib/index';
import update from 'immutability-helper';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  VTablePro,
  generateColumns,
  generateData,
  // 可伸缩列
  ResizableCell,
  // 可拖拽行
  DraggableBodyRow,
  DndProvider,
  Backend,
  update,
};

export default ReactLiveScope;

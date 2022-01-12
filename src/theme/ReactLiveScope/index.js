/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {VTablePro} from 'virtualized-table';
import {generateColumns, generateData} from "./utils";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  VTablePro,
  generateColumns,
  generateData
};

export default ReactLiveScope;

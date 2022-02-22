import React, {useState} from 'react';
import {Resizable} from 'react-resizable';
import 'react-resizable/css/styles.css';

export const ResizableCell = (props) => {

  const {onResize, width = 150, className, ...restProps} = props;
  let [w, setW] = useState(width);
  let [resizeActive, setResizeActive] = useState(false);
  const _onResize = (e, {size}) => {
    e.stopPropagation();
    e.preventDefault();
    setW(size.width);
  };
  const _onResizeStart = (e) => {
    e.stopPropagation();
    setResizeActive(true);
  };
  const _onResizeStop = (e, {element, size}) => {
    e.stopPropagation();
    setResizeActive(false);
    onResize(e, {element, size});
  };
  return (
    <Resizable
      width={w}
      height={0}
      onResize={_onResize}
      onResizeStart={_onResizeStart}
      onResizeStop={_onResizeStop}
      resizeHandles={['e']}
      handle={<span className={`custom-handle-e ${resizeActive ? 'active' : ''}`} style={{left: w - 5}} onClick={e => {
        e.stopPropagation();
      }}/>}
      // draggableOpts={{ grid: [25, 25] }}
    >
      <div className={`my_cell ${className}`} {...restProps} />
    </Resizable>
  );

};

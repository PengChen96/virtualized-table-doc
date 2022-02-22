---
sidebar_position: 10
---

# 可伸缩列
```jsx live
// import {ResizableCell} from './components/ResizableCell'
// import 'column-resize.css';
function MyComponent() {
  
  const colNum = 10;
  const dataNum = 500;
  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setColumns(generateColumns(colNum));
    setDataSource(generateData(dataNum, colNum));
  }, []);

  const handleResize = index => (e, {size}) => {
    const nextColumns = [...columns];
    nextColumns[index] = {
      ...nextColumns[index],
      width: size.width,
    };
    setColumns(nextColumns);
  };
  const newColumns = () => columns.map((col, index) => ({
    ...col,
    onCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  return (
    <>
      <VTablePro
        bordered
        columns={newColumns()}
        dataSource={dataSource}                               
        className='my-column-resize-table'
        components={{
          header: {
            cell: ResizableCell
          }
        }}
      />
    </>
  );

}
```
## components/ResizableCell
```javascript
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
    >
      <div className={`my_cell ${className}`} {...restProps} />
    </Resizable>
  );

};
```

## column-resize.css
```css
.my-column-resize-table .react-resizable {
  position: relative;
  background-clip: padding-box;
}

.my-column-resize-table .custom-handle-e {
  position: absolute;
  right: -5px;
  bottom: 0;
  z-index: 10;
  width: 10px;
  height: 100%;
  cursor: col-resize;
}
.my-column-resize-table .active {
  width: 6px;
  border-right: 1px dashed #d1d3d8;
  height: 100vh;
  top: 0;
}
```

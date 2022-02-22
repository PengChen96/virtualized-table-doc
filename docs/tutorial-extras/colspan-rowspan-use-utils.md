---
sidebar_position: 7
---

# 行/列合并utils
```jsx live
// import {VTablePro, utils} from 'virtualized-table';
function MyComponent() {

  const colNum = 10;
  const dataNum = 500;
  
  const getColumns = (nums) => {
    const dynamicColumns = generateColumns(nums);
    const mergesArr = [
      { s: {c: 1, r: 1}, e: {c: 6, r: 1} },
      { s: {c: 1, r: 2}, e: {c: 2, r: 5} },
      { s: {c: 3, r: 2}, e: {c: 4, r: 3} },
      { s: {c: 3, r: 4}, e: {c: 4, r: 5} },
      { s: {c: 5, r: 2}, e: {c: 6, r: 2} },
      { s: {c: 5, r: 3}, e: {c: 6, r: 3} },
      { s: {c: 5, r: 4}, e: {c: 6, r: 4} },
      { s: {c: 1, r: 6}, e: {c: 6, r: 7} },
    ];
    const mergesObj = utils().formatToCellsSpan(mergesArr);
    return dynamicColumns.map((column, colIndex) => {
      column.render = (value, row, rowIndex, realRowIndex) => {
        const obj = {
          children: value,
          props: mergesObj[`${colIndex}:${realRowIndex}`]
        };
        return obj;
      };
      return column;
    });
  };
  const columns = getColumns(colNum);
  const dataSource = generateData(dataNum, colNum);
  return (
    <>
      <VTablePro
        bordered
        fixedRowHeight
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );

}
```

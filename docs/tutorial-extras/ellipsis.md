---
sidebar_position: 3
---

# 固定行高/省略号
```jsx live
function MyComponent() {
  const colNum = 10;
  const dataNum = 500;
  const columns = generateColumns(
    colNum, 
    {
      columnObj: () => {
        return { ellipsis: true }
      } 
    }
  );
  const dataSource = generateData(
    dataNum, 
    colNum,
    (j) => {
      return [1].includes(j % 3) ? `内容A内容B内容C内容D内容E内容A内容B内容C内容D内容E${j}` : `内容A${j}`;
    }
  );
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

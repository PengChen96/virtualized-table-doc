---
sidebar_position: 2
---

# 自定义行高
```jsx live
function MyComponent() {
  const colNum = 10;
  const dataNum = 500;
  const columns = generateColumns(colNum);
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
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );

}
```

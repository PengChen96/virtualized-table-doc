---
sidebar_position: 4
---

# 固定列
```jsx live
function MyComponent() {

  const colNum = 10;
  const dataNum = 500;
  const columns = generateColumns(colNum);
  const dataSource = generateData(dataNum, colNum);
  return (
    <>
      <VTablePro
        bordered
        columns={columns}
        dataSource={dataSource}
        fixedLeftColumnCount={1}
        fixedRightColumnCount={1}
      />
    </>
  );

}
```

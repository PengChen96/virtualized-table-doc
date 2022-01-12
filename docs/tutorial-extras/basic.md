---
sidebar_position: 1
---

# 基础用法
```jsx live
function MyComponent() {

  const colNum = 10;
  const dataNum = 500;
  const columns = generateColumns(colNum);
  const dataSource = generateData(dataNum, colNum);
  return (
    <>
      <VTablePro
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );

}
```

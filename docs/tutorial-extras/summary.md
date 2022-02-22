---
sidebar_position: 9
---

# 总结栏
```jsx live
function MyComponent() {

  const colNum = 10;
  const dataNum = 500;
  const columns = generateColumns(colNum);
  const dataSource = generateData(dataNum, colNum);
  const summary = () => {
    const dataList = [{'checkBox': 'N/A'}];
    columns.forEach((column, index) => {
      dataList[0][column.key] = '总结列' + index;
    });
    return dataList;
  };
  const summaryData = summary();
  return (
    <>
      <VTablePro
        bordered
        columns={columns}
        dataSource={dataSource}
        summary={summaryData}
        rowSelection={{
          columnWidth: 60,
          type: 'checkbox',
        }}
      />
    </>
  );

}
```

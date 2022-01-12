---
sidebar_position: 1
---

# 可选择
```jsx live
function MyComponent() {

  const colNum = 10;
  const dataNum = 500;
  const columns = generateColumns(colNum);
  const dataSource = generateData(dataNum, colNum);
  const [selectedRowKeys, setSelectedRowKeys] = useState(['rowKey1', 'rowKey3']);
  const rowSelection = {
    columnWidth: 60,
    getCheckboxProps: (record) => ({
      disabled: record.id === 5
    }),
    selectedRowKeys,
    type: 'checkbox',
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows);
      setSelectedRowKeys(selectedRowKeys);
    },
    onSelect: (record, selected, selectedRows, nativeEvent)=>{
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    }
  }
  return (
    <>
      <VTablePro
        columns={columns}
        dataSource={dataSource}
        rowKey={(item) => `${item.rowKey}`}
        rowSelection={rowSelection}
      />
    </>
  );

}
```

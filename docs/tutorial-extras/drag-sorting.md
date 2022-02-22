---
sidebar_position: 11
---

# 可拖拽行
```jsx live
class MyComponent extends React.Component{
  constructor() {
    super();
    this.state = {
      columns: [],
      dataSource: []
    };
  }
  componentDidMount() {
    const colNum = 10;
    const dataNum = 500;
    const columns = generateColumns(colNum);
    const dataSource = generateData(dataNum, colNum);
    this.setState({
      columns,
      dataSource
    });
  } 
  
  moveRow(dragIndex, hoverIndex) {
      console.log(dragIndex, '=>', hoverIndex);
      const {dataSource} = this.state;
      const dragRow = dataSource[dragIndex];
      this.setState(
        update(this.state, {
          dataSource: {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragRow],
            ],
          },
        }),
        () => {
          console.log(this.state.dataSource);
        }
      );
    }
  render() {
    const {columns, dataSource} = this.state;
    return <div>
      <DndProvider backend={Backend}>
        <VTablePro
          bordered
          columns={columns}
          dataSource={dataSource}
          // 重写body row
          components={{
            body: {
              row: DraggableBodyRow
            }
          }}
          // 设置行属性
          onRow={(record, index) => {
            return ({
              index,
              moveRow: this.moveRow.bind(this),
            });
          }}
        />
      </DndProvider>
    </div>
  }
}
```

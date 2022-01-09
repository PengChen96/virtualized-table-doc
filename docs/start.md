---
sidebar_position: 2
---

# 快速开始

## 安装

**使用npm或yarn**
```shell
npm install virtualized-table --save
# or
yarn add virtualized-table
```

**使用CDN**
```html
<!-- 注意: 部署时，将 "development.umd.js" 替换为 "production.umd.min.js"-->
<script crossorigin src="https://unpkg.com/virtualized-table/dist/vtable.development.umd.js"></script>
```
<details>
  <summary><b>CDN Availability</b> (click to show)</summary>

|    CDN     | URL                                        |
|-----------:|:-------------------------------------------|
|    `unpkg` | <https://unpkg.com/virtualized-table/>                  |
| `jsDelivr` | <https://jsdelivr.com/package/npm/virtualized-table>    |
</details>


## 使用
```javascript
import { VTablePro } from "virtualized-table";

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  return <VTablePro
    columns={columns}
    dataSource={dataSource}
  />                  
}
```

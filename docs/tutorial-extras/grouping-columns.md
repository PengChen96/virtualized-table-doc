---
sidebar_position: 8
---

# 表头分组
```jsx live
function MyComponent() {

  const columns = [
      {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      },
      {
        title: 'Other',
        children: [
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 150,
          },
          {
            title: 'Address',
            children: [
              {
                title: 'Street',
                dataIndex: 'street',
                key: 'street',
                width: 150,
              },
              {
                title: 'Block',
                children: [
                  {
                    title: 'Building',
                    dataIndex: 'building',
                    key: 'building',
                    width: 100,
                  },
                  {
                    title: 'Door No.',
                    dataIndex: 'number',
                    key: 'number',
                    width: 100,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Company',
        children: [
          {
            title: 'Company Address',
            dataIndex: 'companyAddress',
            key: 'companyAddress',
            width: 200,
          },
          {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
          },
        ],
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: 80,
      },
    ];
      
    const dataSource = [];
    for (let i = 0; i < 500; i++) {
      dataSource.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
      });
    }
    
    return (
        <VTablePro
          bordered
          fixedRowHeight
          columns={columns}
          dataSource={dataSource}
        />
    );

}
```

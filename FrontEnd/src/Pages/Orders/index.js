import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../API";

function Orders() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    
    useEffect(() => {
        setLoading(true)
        getOrders().then(res=>{
            setDataSource(res.products)
            setLoading(false);
        })
    }, [])
    
    return (
        <Space size={20} direction='vertical'>
            <Typography.Title level={4}>Order List</Typography.Title>
            <Table 
                loading={loading}
                columns={[
                    {
                        title:"TiTle",
                        dataIndex:'title',
                    },
                    {
                        title:"Price",
                        dataIndex:'price',
                        render:(value)=><span>Rs.{value}</span>
                    },
                    {
                        title:"Discounted Price",
                        dataIndex:'discountedPrice',
                        render:(value)=><span>Rs.{value}</span>
                    },
                    {
                        title:"Quantity",
                        dataIndex:'quantity',
                    },
                    {
                        title:"Total",
                        dataIndex:'total',
                    },
            ]}
            dataSource={dataSource}
            pagination={{
                pageSize: 6,
            }}
            ></Table>
        </Space>
    ); 
}
export default Orders;
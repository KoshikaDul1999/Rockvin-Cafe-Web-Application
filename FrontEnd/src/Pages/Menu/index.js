import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import { Link } from 'react-router-dom'

function Menu() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    
    useEffect(() => {
        setLoading(true)
        getInventory().then(res=>{
            setDataSource(res.products)
            setLoading(false);
        })
    }, [])
    
    return (
        <Space size={20} direction='vertical'>
            <Typography.Title level={4}>Menu List</Typography.Title>
            <Link className='btn btn-warning' to="/addnewmenu">Add New Menu</Link>
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
                        title:"Rating",
                        dataIndex:'rating',
                        render:(rating)=>{
                            return <Rate value={rating} allowHalf disabled/>
                        } 
                    },
                    {
                        title:"Stock",
                        dataIndex:'stock',
                    },
                    {
                        title:"Thumbnail",
                        dataIndex:'thumbnail',
                        render:(link)=>{
                            return <Avatar src={link} />
                        }
                    },
                    {
                        title:"Brand",
                        dataIndex:'brand',
                    },
                    {
                        title:"Category",
                        dataIndex:'category',
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
export default Menu;
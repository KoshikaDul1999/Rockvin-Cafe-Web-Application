import { Typography } from "antd"
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div>
            <Typography.Title level={4}>Admin Profile</Typography.Title>
            <Link className='btn btn-dark' to="/addnewadmin">Add New Admin</Link>
        </div>
    ); 
}
export default Profile
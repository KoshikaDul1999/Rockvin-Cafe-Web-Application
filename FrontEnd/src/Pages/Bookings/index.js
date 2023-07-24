import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Booking() {

    const [bookings,setBookings]=useState([]);
    const [searchTime, setSearchTime] = useState('');
    const [searchTable, setSearchTable] = useState('');
    const { booking_id }=useParams()

    useEffect(() => {
        loadBooking();
    },[]);

    const loadBooking = async () => {
        try {
          const result = await axios.get("http://localhost:5000/bookings");
          const bookingsData = result.data;
          setBookings(bookingsData);
        } catch (error) {
          console.log(error.message);
        }
      };

    const deleteBooking = async (orderid) => {
        // Show a confirmation popup
        const confirmDelete = window.confirm("Are you sure you want to delete this booking");
        if (confirmDelete) {
        await axios.delete(`http://localhost:5000/bookings/${booking_id}`);
        loadBooking();
        } else {
        console.log("Booking was not deleted.");
        }
    };

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
            <div>
                <Typography.Title level={4}>Table Bookings</Typography.Title>
                {/* <Link className='btn btn-primary' to="/addnewcategory">Add New category</Link> */}
                <div className="container">
                    <div className="py-4">

                        {/* Search bars */}
                        <div>
                            <input
                                type="text"
                                placeholder="Search by Time"
                                value={searchTime}
                                onChange={(e) => setSearchTime(e.target.value)}
                            />
                            <button onClick={() => setSearchTime('')}>Clear</button>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Search by Table"
                                value={searchTable}
                                onChange={(e) => setSearchTable(e.target.value)}
                            />
                            <button onClick={() => setSearchTable('')}>Clear</button>
                        </div>

                        <table className="table border shadow-inner, table-primary">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Booking ID</th>
                                <th scope="col">Table Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            bookings
                                .filter((tablebooking) => {
                                    // Filter by search inputs
                                    const timeMatch = tablebooking.time.includes(searchTime);
                                    const tableMatch = tablebooking.table?.table_name.includes(searchTable);
                                    return (!searchTime || timeMatch) && (!searchTable || tableMatch);
                                })
                                .map((tablebooking,index)=>(
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{tablebooking.table?.table_name}</td> 
                                        <td>{tablebooking.user?.fname} {tablebooking.user?.lname}</td> 
                                        <td>{tablebooking.date}</td>
                                        <td>{tablebooking.time}</td>
                                        <td>
                                            {/* <Link className='btn btn-primary mx-2'
                                                to={`/viewbooking/${tablebooking.booking_id}`}
                                            >
                                                View
                                            </Link> */}

                                            <Link className='btn btn-outline-primary mx-2'
                                            to={`/editbooking/${tablebooking.booking_id}`}
                                            >
                                                Edit
                                            </Link>

                                            <button className='btn btn-danger mx-2'
                                                onClick={() => deleteBooking(tablebooking.booking_id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr> 
                            ))
                        }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Booking;




// import { Typography } from "antd";
// import { Link, useParams } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SideMenu from '../../Components/SideMenu';
// import PageContent from '../../Components/PageContent';

// function Booking() {

//     const [bookings,setBookings]=useState([]);
//     const [searchTime, setSearchTime] = useState('');
//     const [searchTable, setSearchTable] = useState('');
//     const { booking_id }=useParams()

//     useEffect(() => {
//         loadBooking();
//     },[]);

//     const loadBooking = async () => {
//         try {
//           const result = await axios.get("http://localhost:5000/bookings");
//           const bookingsData = result.data;
//           setBookings(bookingsData);
//         } catch (error) {
//           console.log(error.message);
//         }
//       };

//     const deleteBooking = async (orderid) => {
//         // Show a confirmation popup
//         const confirmDelete = window.confirm("Are you sure you want to delete this booking");
//         if (confirmDelete) {
//         await axios.delete(`http://localhost:5000/bookings/${booking_id}`);
//         loadBooking();
//         } else {
//         console.log("Booking was not deleted.");
//         }
//     };

//     return (
//         <div className="SideMenuAndPageContent">
//         <SideMenu></SideMenu>
//         <PageContent></PageContent>
//             <div>
//                 <Typography.Title level={4}>Table Bookings</Typography.Title>
//                 {/* <Link className='btn btn-primary' to="/addnewcategory">Add New category</Link> */}
//                 <div className="container">
//                     <div className="py-4">
//                         <div>
//                             <input
//                                 type="text"
//                                 placeholder="Search by Time"
//                                 value={searchTime}
//                                 onChange={(e) => setSearchTime(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                         <input
//                             type="text"
//                             placeholder="Search by Table"
//                             value={searchTable}
//                             onChange={(e) => setSearchTable(e.target.value)}
//                         />
//                         </div>
//                         <table className="table border shadow-inner, table-primary">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th scope="col">Booking ID</th>
//                                 <th scope="col">Table Name</th>
//                                 <th scope="col">User Name</th>
//                                 <th scope="col">Date</th>
//                                 <th scope="col">Time</th>
//                                 <th scope="col">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {
//                             bookings
//                                 .filter((tablebooking) => {
//                                     // Filter by search inputs
//                                     const timeMatch = tablebooking.time.includes(searchTime);
//                                     const tableMatch = tablebooking.table?.table_name.includes(searchTable);
//                                     return timeMatch && tableMatch;
//                                 })
//                                 .map((tablebooking,index)=>(
//                                     <tr key={index}>
//                                         <th scope="row">{index + 1}</th>
//                                         <td>{tablebooking.table?.table_name}</td> 
//                                         <td>{tablebooking.user?.fname} {tablebooking.user?.lname}</td> 
//                                         <td>{tablebooking.date}</td>
//                                         <td>{tablebooking.time}</td>
//                                         <td>
//                                             {/* <Link className='btn btn-primary mx-2'
//                                                 to={`/viewbooking/${tablebooking.booking_id}`}
//                                             >
//                                                 View
//                                             </Link> */}

//                                             <Link className='btn btn-outline-primary mx-2'
//                                             to={`/editbooking/${tablebooking.booking_id}`}
//                                             >
//                                                 Edit
//                                             </Link>

//                                             <button className='btn btn-danger mx-2'
//                                                 onClick={() => deleteBooking(tablebooking.booking_id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr> 
//                             ))
//                         }
//                         </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ); 
// }
// export default Booking
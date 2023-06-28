// import React from 'react';
// import { Typography } from "antd";
// import SideMenu from '../../Components/SideMenu';
// import PageContent from '../../Components/PageContent';
// import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
// import {
//   Chart,
//   ChartSeries,
//   ChartSeriesItem,
//   ChartCategoryAxis,
//   ChartCategoryAxisItem,
//   ChartTitle
// } from "@progress/kendo-react-charts";

// function Reports() {
//   // Sample data for charts
//   const dailyData = [10, 15, 20, 25, 30];
//   const monthlyData = [100, 200, 300, 400, 500];
//   const annualData = [1000, 2000, 3000, 4000, 5000];

//   return (
//     <div className="SideMenuAndPageContent">
//       <SideMenu></SideMenu>
//       <PageContent></PageContent>

//       <div>
//         <Typography.Title level={4}>Reports</Typography.Title>
        
//         <PanelBar>
//           <PanelBarItem expanded={true} title="Daily Reports">
//             <Chart>
//               <ChartTitle text="Daily Report" />
//               <ChartCategoryAxis>
//                 <ChartCategoryAxisItem categories={["Mon", "Tue", "Wed", "Thu", "Fri"]} />
//               </ChartCategoryAxis>
//               <ChartSeries>
//                 <ChartSeriesItem type="line" data={dailyData} />
//               </ChartSeries>
//             </Chart>
//           </PanelBarItem>
//           <PanelBarItem title="Monthly Reports">
//             <Chart>
//               <ChartTitle text="Monthly Report" />
//               <ChartCategoryAxis>
//                 <ChartCategoryAxisItem categories={["Jan", "Feb", "Mar", "Apr", "May"]} />
//               </ChartCategoryAxis>
//               <ChartSeries>
//                 <ChartSeriesItem type="column" data={monthlyData} />
//               </ChartSeries>
//             </Chart>
//           </PanelBarItem>
//           <PanelBarItem title="Annual Reports">
//             <Chart>
//               <ChartTitle text="Annual Report" />
//               <ChartCategoryAxis>
//                 <ChartCategoryAxisItem categories={["2019", "2020", "2021", "2022", "2023"]} />
//               </ChartCategoryAxis>
//               <ChartSeries>
//                 <ChartSeriesItem type="bar" data={annualData} />
//               </ChartSeries>
//             </Chart>
//           </PanelBarItem>
//         </PanelBar>
//       </div>
//     </div>
//   );
// }

// export default Reports;




import React from 'react';
import { Typography } from "antd";
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

  function Reports() {
    return (
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
  
        <div>
          <Typography.Title level={4}>Reports</Typography.Title>
          
        </div>
      </div>
    );
  }
  
  export default Reports;

import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,} from 'chart.js';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler);
const Dashboard = () => {
  const data = [
    { name: 'A', volume: 300, service: 200 },
    { name: 'B', volume: 200, service: 180 },
    { name: 'C', volume: 250, service: 150 },
    { name: 'D', volume: 280, service: 230 },
    { name: 'E', volume: 290, service: 180 },
  ];
  const products=[
      { id: 1, name: 'Home Decore Range', popularity: 80, sales: 46, salesColor: '#FFAC42' },
      { id: 2, name: 'Disney Princess Dress', popularity: 60, sales: 17, salesColor: '#88E6E5' },
      { id: 3, name: 'Bathroom Essentials', popularity: 70, sales: 19, salesColor: '#209BF7' },
      { id: 4, name: 'Apple Smartwatch', popularity: 40, sales: 29, salesColor: '#D7ACE7' },
    ];
    const getPopularityColor = (popularity) => {
      if (popularity > 70) return '#FFAC42'; 
      if (popularity > 40) return '#88E6E5'; 
      return '#209BF7';
    };
    const graphdata = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
         
        },
        {
          label: 'Dataset 2',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: true,
          backgroundColor: 'rgba(153,102,255,0.2)',
          borderColor: 'rgba(153,102,255,1)',
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        y: {
          display: false,
          grid: {
            display: false,
          },
        },
        x: {
          display: false,
          grid: {
            display: false,
          },
        },
      },
    };
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const xLabels = [
     'Jan',
     'Feb',
     'Mar',
     'Apr',
     'May',
     'Jun',
     'Jul',
  ];
  return (
    <div className='container'>
      <div style={{display:'flex',gridColumnGap:'10px'}}>
      <Grid style={{height:'251px',width:'704px',backgroundColor:'#21222D',borderRadius:'10px'}}>
        <div className='textalign'>
          <Typography className='text'>Today's Sales</Typography>
      <Typography style={{width:'74px',height:'12px',fontFamily:'Inter',fontWeight:'500',fontSize:'10px',lineHeight:'12.1px',color:'#A0A0A0',marginTop:'5px'}}>Sales Summary</Typography>
      </div>
      <div style={{display:'flex',marginTop:'20px',marginLeft:'14px'}}>
      <Grid className='innergrid'>
        <div style={{marginLeft:'12px',marginTop:'10px'}}>
        <img className='gridimage' src='none.png' alt='icon'/>
        <Typography style={{height:'18px',width:'28px',fontFamily:'Inter',fontWeight:'600',fontSize:'15px',lineHeight:'18.15px',color:'#ffff',marginTop:'12px'}}>$5K</Typography>
        <Typography style={{height:'12px',width:'53px',fontFamily:'Inter',fontWeight:'500',fontSize:'10px',lineHeight:'12.1px',color:'#ffff',marginTop:'5px'}}>Total Sales</Typography>
        <Typography style={{height:'10px',width:'81px',fontFamily:'Inter',fontWeight:'500',fontSize:'8px',lineHeight:'9.68px',color:'#FEB95A',marginTop:'5px'}}>+10% from yesterday</Typography>
        </div>
      </Grid>
      <Grid className='innergrid'>
      <div style={{marginLeft:'12px',marginTop:'10px'}}>
        <img className='gridimage' src='none1.png' alt='icon2'/>
        <Typography style={{height:'18px',width:'28px',fontFamily:'Inter',fontWeight:'600',fontSize:'15px',lineHeight:'18.15px',color:'#ffff',marginTop:'12px'}}>500</Typography>
        <Typography style={{height:'12px',width:'54px',fontFamily:'Inter',fontWeight:'500',fontSize:'10px',lineHeight:'12.1px',color:'#ffff',marginTop:'5px'}}>Total Orders</Typography>
        <Typography style={{height:'10px',width:'81px',fontFamily:'Inter',fontWeight:'500',fontSize:'8px',lineHeight:'9.68px',color:'#A9DFD8',marginTop:'5px'}}>+8% from yesterday</Typography>
        </div>
        </Grid>
      <Grid className='innergrid'>
      <div style={{marginLeft:'12px',marginTop:'10px'}}>
        <img className='gridimage' src='none4.png' alt='icon3'/>
        <Typography style={{height:'18px',width:'28px',fontFamily:'Inter',fontWeight:'600',fontSize:'15px',lineHeight:'18.15px',color:'#ffff',marginTop:'12px'}}>9</Typography>
        <Typography style={{height:'12px',width:'54px',fontFamily:'Inter',fontWeight:'500',fontSize:'10px',lineHeight:'12.1px',color:'#ffff',marginTop:'5px'}}>Product Sold</Typography>
        <Typography style={{height:'10px',width:'81px',fontFamily:'Inter',fontWeight:'500',fontSize:'8px',lineHeight:'9.68px',color:'#F2C8ED',marginTop:'5px'}}>+2% from yesterday</Typography>
        </div>
        </Grid>
      <Grid className='innergrid'>
      <div style={{marginLeft:'12px',marginTop:'10px'}}>
      <img className='gridimage' src='none3.png' alt='icon4'/>
        <Typography style={{height:'18px',width:'28px',fontFamily:'Inter',fontWeight:'600',fontSize:'15px',lineHeight:'18.15px',color:'#ffff',marginTop:'12px'}}>12</Typography>
        <Typography style={{height:'12px',width:'72px',fontFamily:'Inter',fontWeight:'500',fontSize:'10px',lineHeight:'12.1px',color:'#ffff',marginTop:'5px'}}>New Customer</Typography>
        <Typography style={{height:'10px',width:'81px',fontFamily:'Inter',fontWeight:'500',fontSize:'8px',lineHeight:'9.68px',color:'#20AEF3',marginTop:'5px'}}>+3% from yesterday</Typography>
        </div>
        </Grid>
      </div>
      </Grid>
      <Grid style={{height:'251px',width:'438px',backgroundColor:'#21222D',borderRadius:'10px'}}>
      <Typography style={{height:'18px',width:'28px',fontFamily:'Inter',fontWeight:'600',fontSize:'15px',lineHeight:'18.15px',color:'#ffff',marginTop:'22px',marginLeft:'12px'}}>Level</Typography>
      <ResponsiveContainer width="90%" height={200}>
    <BarChart data={data} barSize={30}>
      <CartesianGrid stroke="none" />
      <XAxis dataKey="name" stroke="none" />
      <YAxis stroke="none"/>
      <Legend />
      <Bar dataKey="volume" stackId="a" fill="#92E7E0" radius={[4,4,0,0]} width={[20]} />
      <Bar dataKey="service" stackId="a" fill="#2F2F3B" radius={[4,4,0,0]} width={[20]} />
    </BarChart>
  </ResponsiveContainer>
      </Grid>
      </div>
      <div style={{display:'flex',gridColumnGap:'10px',marginTop:'10px'}}>
      <Grid style={{height:'251px',width:'704px',backgroundColor:'#21222D',borderRadius:'10px'}}>
        <div style={{marginLeft:'14px',marginTop:'14px'}}>
        <Typography style={{width:'97px',height:'18px',fontFamily:'Inter',fontWeight:'600',fontSize:'15px',lineHeight:'18.15px',color:'#ffff'}}>Top Products</Typography>
        <table className="top-products">
      <thead>
        <tr>
          <th><Typography style={{width:'9px',height:'16px',fontFamily:'Inter',fontWeight:'500',fontSize:'13px',lineHeight:'15.73px',color: '#87888C'}}>#</Typography></th>
          <th><Typography style={{width:'37px',height:'16px',fontFamily:'Inter',fontWeight:'500',fontSize:'13px',lineHeight:'15.73px',color: '#87888C'}}>Name</Typography></th>
          <th><Typography style={{width:'63px',height:'16px',fontFamily:'Inter',fontWeight:'500',fontSize:'13px',lineHeight:'15.73px',color: '#87888C'}}>Popularity</Typography></th>
          <th><Typography style={{width:'34px',height:'16px',fontFamily:'Inter',fontWeight:'500',fontSize:'13px',lineHeight:'15.73px',color: '#87888C'}}>Sales</Typography></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
           <tr key={product.id}>
           <td style={{width:'15px',height:'16px',fontFamily:'Inter',fontWeight:'500',fontSize:'13px',lineHeight:'15.73px'}}>{product.id < 10 ? `0${product.id}` : product.id}</td>
           <td style={{width:'107px',height:'12px',fontFamily:'Inter',fontWeight:'500',fontSize:'10px',lineHeight:'15.73px'}}>{product.name}</td>
           <td>
             <div className="popularity-bar-container">
               <div
                 className="popularity-bar"
                 style={{ width: `${product.popularity}%`, backgroundColor: getPopularityColor(product.popularity) }}
               ></div>
             </div>
           </td>
           <td>
             <span className="sales-icon" style={{ backgroundColor: product.salesColor }}>
               {product.sales}%
             </span>
           </td>
         </tr>
          
        ))}
      </tbody>
    </table>
        </div>
      </Grid>
      <Grid style={{height:'251px',width:'438px',backgroundColor:'#21222D',borderRadius:'10px'}}>
        <div style={{marginLeft:'14px',marginTop:'14px'}}>
        <Typography style={{width:'147.9px',height:'18px',fontFamily:'Inter',fontWeight:'600',fontSize:'15px',lineHeight:'18.15px'}}>Customer Fulfilment</Typography>
        <div style={{ width: '400px',height:'190px', borderRadius: '10px' }}>
         <Line data={graphdata} options={options} />
        </div>
        </div>
      </Grid>
      </div>
      <div style={{display:'flex',gridColumnGap:'10px',marginTop:'10px'}}>
      <Grid style={{height:'251px',width:'438px',backgroundColor:'#21222D',borderRadius:'10px'}}>
        <div style={{marginLeft:'14px',marginTop:'14px'}}>
          <Typography style={{width:'64px',height:'18px',fontFamily:'Inter',fontWeight:'600',fontSize:'15px',lineHeight:'18.15px',color:'#fffff'}}>Earnings</Typography>
          <Typography style={{width:'68px',height:'12px',fontFamily:'Inter',fontWeight:'500',fontSize:'10px',lineHeight:'12.1px',color:'#fffff',marginTop:'5px'}}>Total Expense</Typography>
          <Typography style={{width:'95px',height:'24px',fontFamily:'Inter',fontWeight:'700',fontSize:'20px',lineHeight:'24.2px',color:'#fffff',marginTop:'5px'}}>$6078.8</Typography>
          <Typography style={{width:'151px',height:'26px',fontFamily:'Inter',fontWeight:'500',fontSize:'11px',lineHeight:'13.31px',color:'#87888C',marginTop:'5px'}}>profit is $48% More than last Month</Typography>
          <div style={{height:'140px',Width:'140px'}}>
          <Gauge value={80} startAngle={-110} endAngle={110} sx={{[`& .${gaugeClasses.valueText}`]: {fontSize: 35,transform: 'translate(0px, 0px)',color:'white'},[`& .${gaugeClasses.valueArc}`]: {fill: '#A9DFD8'}}}
          text={
             ({ value }) => `${value}%`
           }/>
          </div>
        </div>
      </Grid>
      <Grid style={{height:'251px',width:'704px',backgroundColor:'#21222D',borderRadius:'10px'}}>
        <div style={{marginTop:'14px',marginLeft:'14px'}}>
        <Typography style={{width:'110px',height:'18px',fontFamily:'Inter',fontWeight:'600',fontSize:'15px',lineHeight:'18.15px',color:'#fffff'}}>Visitors Insights</Typography>
        <LineChart
      width={700}
      height={240}
      series={[{ data: uData, area: true, showMark: false,color:'#A9DFD8' }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
        Color: 'blue',
      }}
    />
        </div>
      </Grid>
      </div>
     </div>
  )

}

export default Dashboard
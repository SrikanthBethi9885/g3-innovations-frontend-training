import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const data = [
    { name: 'A', volume: 300, service: 200 },
    { name: 'B', volume: 200, service: 180 },
    { name: 'C', volume: 250, service: 150 },
    { name: 'D', volume: 280, service: 230 },
    { name: 'E', volume: 290, service: 180 },
  ];
  const products = [
    { id: 1, name: 'Home Decore Range', popularity: 'high', sales: 46 },
    { id: 2, name: 'Disney Princess Dress', popularity: 'medium', sales: 17 },
    { id: 3, name: 'Bathroom Essentials', popularity: 'medium', sales: 19 },
    { id: 4, name: 'Apple Smartwatch', popularity: 'low', sales: 29 },
  ];
  const getPopularityClass = (popularity) => {
    switch (popularity) {
      case 'high':
        return 'popularity-high';
      case 'medium':
        return 'popularity-medium';
      case 'low':
        return 'popularity-low';
      default:
        return '';
    }
  };
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
        <img className='gridimage' src='none2.png' alt='icon3'/>
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
        <div className="top-products">
      <table>
        <thead>
          <tr>
            <th><Typography className='headertext'>#</Typography></th>
            <th><Typography className='headertext'>Name</Typography></th>
            <th><Typography className='headertext'>Popularity</Typography></th>
            <th><Typography className='headertext'>Sales</Typography></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id < 10 ? `0${product.id}` : product.id}</td>
              <td>{product.name}</td>
              <td>
                <div className={`popularity-bar ${getPopularityClass(product.popularity)}`}></div>
              </td>
              <td>{product.sales}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>

      </Grid>
      <Grid style={{height:'251px',width:'438px',backgroundColor:'#21222D',borderRadius:'10px'}}>item4</Grid>
      </div>
      <div style={{display:'flex',gridColumnGap:'10px',marginTop:'10px'}}>
      <Grid style={{height:'251px',width:'438px',backgroundColor:'#21222D',borderRadius:'10px'}}>item5</Grid>
      <Grid style={{height:'251px',width:'704px',backgroundColor:'#21222D',borderRadius:'10px'}}>item6</Grid>
      </div>
     </div>
  )
}

export default Dashboard
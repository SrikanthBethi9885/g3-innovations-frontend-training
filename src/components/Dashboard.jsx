import React from 'react'
import Grid from '@mui/material/Grid';
const Dashboard = () => {
  return (
    <div className='container'>
      <div style={{display:'flex',gridColumnGap:'10px'}}>
      <Grid style={{height:'251px',width:'704px',backgroundColor:'#21222D',borderRadius:'10px'}}>item1</Grid>
      <Grid style={{height:'251px',width:'438px',backgroundColor:'#21222D',borderRadius:'10px'}}>item2</Grid>
      </div>
      <div style={{display:'flex',gridColumnGap:'10px',marginTop:'10px'}}>
      <Grid style={{height:'251px',width:'704px',backgroundColor:'#21222D',borderRadius:'10px'}}>item3</Grid>
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
import React from 'react'
// import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            
            <button className='button1'><img style={{ width: '14px', height: '14px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='home.png' alt='home' />Dashboard</button>
            <button className='button2'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='Vector.png' alt='profile' />Profile</button>
            <button className='button3'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px', marginRight:'9px'}} src='leaderboard.png' alt='leaderboard' />Leaderboard</button>
            <button className='button4'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px' ,marginRight:'9px'}} src='order.png' alt='order' />Order</button>
            <button className='button5'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px'  }} src='product.png' alt='product' />Product</button> 
            <button className='button6'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='sales.png' alt='salesreport' />SalesReport</button>
            <button className='button7'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='messages.png' alt='mesaages' />Messages</button>
            <button className='button8'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='setting.png' alt='settings' />Settings</button>
            <button className='button9'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='favourite.png' alt='favourite' />Favourite</button>
            <button className='button10'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='history.png' alt='history'/>History</button>
            <button className='button11'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='signout.png' alt='signout' />Signout</button>  
          
        </div>
    )
}

export default Sidebar;
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            
            <button className='button1'><img style={{ width: '14px', height: '14px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='home.png' alt='home' /><Link to='/'>Dashboard</Link></button>
            <button className='button2'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='Vector.png' alt='profile' /><Link to='/profile'>Profile</Link></button>
            <button className='button3'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px', marginRight:'9px'}} src='leaderboard.png' alt='leaderboard' /><Link to='/leaderboard'>Leaderboard</Link></button>
            {/* <button className='button4'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px' ,marginRight:'9px'}} src='order.png' alt='order' /><Link to='/order'>Order</Link></button>
            <button className='button5'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px'  }} src='product.png' alt='product' /><Link to='/product'></Link>Product</button>
            <button className='button6'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='sales.png' alt='salesreport' /><Link to='/salesreport'>SalesReport</Link></button>
            <button className='button7'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='messages.png' alt='mesaages' /><Link to='/messages'>Messages</Link></button>
            <button className='button8'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='setting.png' alt='settings' /><Link to='/settings'>Settings</Link></button>
            <button className='button9'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='favourite.png' alt='favourite' /><Link to='/favourite'>Favourite</Link></button>
            <button className='button10'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='history.png' alt='history'/><Link to='/history'>History</Link></button>
            <button className='button11'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='signout.png' alt='signout' /><Link to='/signout'>Signout</Link></button>
             */}
        </div>
    )
}

export default Sidebar
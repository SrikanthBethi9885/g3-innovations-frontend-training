import React from 'react'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <button className='button1'><img style={{ width: '14px', height: '14px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='home.png' />Dashboard</button>
            <button className='button2'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='Vector.png' />Profile</button>
            <button className='button3'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px', marginRight:'9px'}} src='leaderboard.png' />Leaderboard</button>
            <button className='button4'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px' ,marginRight:'9px'}} src='order.png' />Order</button>
            <button className='button5'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px'  }} src='product.png' />Product</button>
            <button className='button6'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='sales.png' />Sales Report</button>
            <button className='button7'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='messages.png' />Messages</button>
            <button className='button8'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='setting.png' />Settings</button>
            <button className='button9'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='favourite.png' />Favourite</button>
            <button className='button10'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='history.png' />History</button>
            <button className='button11'><img style={{ width: '12px', height: '12px', position: 'relative', top: '1.5px', left: '1px',marginRight:'9px' }} src='signout.png' />Signout</button>
        </div>
    )
}

export default Sidebar
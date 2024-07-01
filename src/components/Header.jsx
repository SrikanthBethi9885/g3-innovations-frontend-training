import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <input style={{position: 'absolute',top: '17px',left: '175px',width: '504px',height: '44px',backgroundColor: '#21222D',borderRadius: '8px',borderStyle: 'none',paddingLeft: '35px',color: '#D2D2D2',fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '14.52px'}} type='text' placeholder='Search here...'/>
      <img style={{width: '10.83px',height:'10.83px',position:'relative',left:'190px',bottom:'1px',backgroundColor: '#21222D'}}src='search.png'alt='search'/>
      <div className='pic'>
      <img style={{  width: '14.89px',height: '16.79px'}} src='notification.png' alt='notification' />
      <img style={{width: '6px',height: '6px',position: 'relative',bottom: '9px',right: '6px'}} src='Ellipse.png' alt='dot' />
      <img style={{marginRight: '15px',marginLeft:'15px',height:'29px',width:'29px'}}src='man.png' alt='man'/>
      <img style={{height:'12px',width:'6px',transform:'rotate(360deg)'}} src='dropdowm.png' height={'12px'} width={'6px'} alt='dropdown'/>
      </div>
    </div>
  )
}

export default Header

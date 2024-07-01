import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      
      <input className='input' type='text' placeholder='Search here...'/>
      <img className='pic'src='search.png'/>
      <div className='left-headersection'>
      <img className='pic1' src='notification.png' alt='notification' />
      <img className='pic2' src='Ellipse.png' alt='dot' />
      <img style={{marginRight: '15px',marginLeft:'15px',height:'29px',width:'29px'}}src='man.png' alt='man'/>
      <img style={{height:'12px',width:'6px',transform:'rotate(360deg)'}} src='dropdowm.png' height={'12px'} width={'6px'} alt='dropdown'/>
      </div>
    </div>
  )
}

export default Header

import React from 'react'

const Header = () => {
  return (
    <div>
      
      <input className='input' type='text' placeholder='Search here...'/>
      <img className='pic'src='search.png'/>
      <div className='left-headersection'>
      <img className='pic1' src='notification.png' />
      <img className='pic2' src='Ellipse.png' />
      <img style={{marginRight: '15px',marginLeft:'15px',height:'29px',width:'29px'}}src='man.png' alt='man'/>
      <img style={{height:'12px',width:'6px',transform:'rotate(360deg)'}} src='dropdowm.png' height={'12px'} width={'6px'}/>
      </div>
      <div className='container'>

      </div>
    </div>
  )
}

export default Header

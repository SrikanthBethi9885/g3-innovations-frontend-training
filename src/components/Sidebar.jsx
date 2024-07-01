import React from 'react';
import { Link } from 'react-router-dom';

const buttonData = [
    { src: 'home.png', alt: 'home', text: 'Dashboard', link: '/' },
    { src: 'Vector.png', alt: 'profile', text: 'Profile', link: '/profile' },
    { src: 'leaderboard.png', alt: 'leaderboard', text: 'Leaderboard', link: '/leaderboard' },
    { src: 'order.png', alt: 'order', text: 'Order', link: '/order' },
    { src: 'product.png', alt: 'product', text: 'Product', link: '/product' },
    { src: 'sales.png', alt: 'salesreport', text: 'SalesReport', link: '/salesreport' },
    { src: 'messages.png', alt: 'messages', text: 'Messages', link: '/messages' },
    { src: 'setting.png', alt: 'settings', text: 'Settings', link: '/settings' },
    { src: 'favourite.png', alt: 'favourite', text: 'Favourite', link: '/favourite' },
    { src: 'history.png', alt: 'history', text: 'History', link: '/history' },
    { src: 'signout.png', alt: 'signout', text: 'Signout', link: '/signout' }
];

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            {buttonData.map((button, index) => (
                <Link to={button.link} key={index} className='button'>
                    <img 
                        style={{ 
                            width: '12px', 
                            height: '12px', 
                            position: 'relative', 
                            top: '1.5px', 
                            left: '1px', 
                            marginRight: '9px' 
                        }} 
                        src={button.src} 
                        alt={button.alt} 
                    />
                    {button.text}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;

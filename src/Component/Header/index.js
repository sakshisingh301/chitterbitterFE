import { Row, Col } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (

        <header>
            <div style={{
                margin: '10px', fontSize: '2.5em', fontFamily: 'ui-monospace', fontStyle: 'oblique', float: 'left'
            }}>ChitterBitter</div>
            <div style={{ fontSize: '20px', float: 'left', margin: '25px' ,color:'antiquewhite'}}> <Link to="/">Home</Link></div>

            <div style={{ fontSize: '20px', float: 'left', marginTop: '25px' }}><Link to="/text">Text-To-Text</Link></div>

            <div style={{ fontSize: '20px', float: 'left', margin: '25px' }}><Link to="/image">Text-To-Image</Link></div>

            <div style={{ fontSize: '20px', float: 'left', marginTop: '25px' }}><Link to="/searchPrompt">Search Prompt</Link></div>
           
         

            <div style={{ float: 'right', marginTop: '23px' , marginRight: '15px'}}>
                <FontAwesomeIcon icon={faSignOutAlt} size="xl" />
            </div>
            <div style={{ float: 'right', marginTop: '23px',marginRight: '15px' }}>
                <FontAwesomeIcon icon={faClockRotateLeft} size="xl" />
                </div>
                <div style={{ float: 'right', marginTop: '23px' , marginRight: '15px'}}>
           <FontAwesomeIcon icon={faUser} size='xl'/>
           </div>
            
        </header>

    );

}

export default Header;
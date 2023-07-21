import { Row, Col } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (

        <header>
            <div style={{
                margin: '10px', fontSize: '2.5em', fontFamily: 'ui-monospace', fontStyle: 'oblique', float: 'left'
            }}>ChitterBitter</div>
            <div style={{ fontSize: '1em', float: 'left', margin:'25px' }}> <Link to="/">Home</Link></div>
           
            <div style={{ fontSize: '1em', float: 'left', marginTop: '25px'  }}><Link to="/text">Text-To-Text</Link></div>
            
            <div style={{ fontSize: '1em', float: 'left', margin: '25px'  }}><Link to="/image">Text-To-Image</Link></div>
            
            <div style={{ fontSize: '1em', float: 'left', marginTop:'25px'  }}><Link to="/searchPrompt">Search Prompt</Link></div>
            
            <div style={{float: 'right', marginTop: '15px'}}>
                <FontAwesomeIcon icon={faSignOutAlt} size="2xl" />
            </div>
        </header>

    );

}

export default Header;
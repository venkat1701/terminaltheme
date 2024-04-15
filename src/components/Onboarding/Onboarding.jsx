import React from 'react'
import './onboarding.css';
import {Link} from 'react-router-dom';

const Onboarding = () => {
  return (
    <div className="venky__onboarding">
        <div className="venky__onboarding_developer">
            <h2>Are you a Developer?</h2>
            <div className="venky__onboarding_developer-buttons">
                <Link to="/dev">
                    <div className="button">
                        <p>Yeah</p>
                    </div>
                </Link>
                <Link to="/nodev">
                    <div className="button">
                        <p>No</p>
                    </div>
                </Link>
            </div>
        </div>        
    </div>
  )
}

export default Onboarding
import React from 'react';
import { connect } from 'react-redux';

class RegionSelection extends React.Component
{
    render() {
        return (
            <div className="container" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
                <div className="option">
                    <h2> Welcome on our online cinema tickets booking app </h2>
                    <h3> Please select your region and language </h3>
                </div>
            </div>
        );
    }
}

export default connect(null)(RegionSelection);

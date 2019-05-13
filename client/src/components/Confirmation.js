import React from 'react';
import { connect } from 'react-redux'

import { confirmBooking } from '../actions'

class Confirmation extends React.Component
{
    render() {
        console.log(this.props.genres);
        return (
            <div className="container">
                <button className="option-button" onClick={() => {
                    console.log('Changes confirmed!');
                    console.log(this.props);
                    this.props.confirmBooking(this.props);
                }}> Confirm changes </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        region: state.region,
        selectedMovie: state.selectedMovie,
        selectedShowing: state.selectedShowing
    }
}

export default connect(mapStateToProps, { confirmBooking })(Confirmation);
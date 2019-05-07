import React from 'react';
import { connect } from 'react-redux';

import { selectRegion } from '../actions';

class RegionSelection extends React.Component
{
    render() {
        return (
            <div className="container" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
                <div className="option">
                    <h2> Welcome on our online cinema tickets booking app </h2>
                    <h3> Please select your region and language and we can proceed </h3>
                    <div>
                        <button className={`option-button ${this.props.region.region === 'PL' ? 'active' : '' }`} onClick={e => {
                            this.props.selectRegion('PL', 'pl-PL');
                            for (let child=0; child<e.target.parentElement.children.length; child++) {
                                e.target.parentElement.children[child].classList.remove("active");
                            }
                            e.target.classList.add("active");
                        }}>POLAND</button>
                        <button className={`option-button ${this.props.region.region === 'US' ? 'active' : '' }`} onClick={e => {
                            this.props.selectRegion('US', 'en-US');
                            for (let child=0; child<e.target.parentElement.children.length; child++) {
                                e.target.parentElement.children[child].classList.remove("active");
                            }
                            e.target.classList.add("active");
                        }}>UNITED STATES</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { region: state.region };
}

export default connect(mapStateToProps, { selectRegion })(RegionSelection);

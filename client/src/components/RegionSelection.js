import React from 'react';
import { connect } from 'react-redux';

import { selectRegion } from '../actions';

class RegionSelection extends React.Component
{
    renderOptions() {
        const locales = [['PL', 'pl-PL', 'Poland'], 
                         ['us', 'en-US', 'United States'],
                         ['gb', 'en-GB', 'Great Britain'],
                         ['fr', 'fr-FR', 'France'],
                         ['es', 'es-ES', 'Spain'],
                         ['de', 'de-DE', 'Germany'],
                         ['jp', 'jp-JP', 'Japan']];
        return locales.map(locale => {
            return (
                <button key={locale[1]} className={`option-button ${this.props.region.region === locale[0] ? 'active' : '' }`} onClick={() => {
                    this.props.selectRegion(locale[0], locale[1]);
                }}>{locale[2]}</button>
            );
        })
    }

    render() {
        return (
            <div className="container" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
                <div className="option">
                    <h2> Welcome to our online cinema tickets booking app </h2>
                    <h3> Please select your region and language and we can proceed </h3>
                    <div className="option-wrapper">
                        {this.renderOptions()}
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

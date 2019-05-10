import React from 'react';
import { connect } from 'react-redux';
import { selectPlace } from '../actions';

class PlaceSelection extends React.Component {
    render() {
                return ( <
                    div className = 'seats-con' > {
                        this.props.seat.map(row =>
                            <
                            div className = {
                                this.props.choosen.indexOf(row) > -1 ? 'choosen' : this.props.reserved.indexOf(row) > -1 ? 'reserved' : 'available'
                            }
                            key = {
                                row
                            }
                            onClick = {
                                e => this.onClickSeat(row)
                            } > {
                                row
                            } < /div>)} < /
                            div >
                        )
                    }

                    onClickSeat(seat) {
                        this.props.onClickData(seat)
                    }
                }

export default connect(null)(PlaceSelection);
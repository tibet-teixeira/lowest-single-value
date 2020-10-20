import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'

const SendBid = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [bid, setBid] = useState('');

    const sendBid = data => {
        axios.post('/server-send-bid', data)
            .then(function (response) {
                console.log('Saved')
            });
    }

    return (
        <div className="main">
            <h1 className='title'>Lowest single value</h1>
            <span className='info'>Insert your bid</span>
            <div className="sendBid">
                <div className="nameField">
                    <label htmlFor="name">Name: </label>
                    <input type="text" value={name} onChange={evt => setName(evt.target.value)} required />
                </div>
                <div className="bidField">
                    <label htmlFor="bid">Bid: </label>
                    <input type="number" step="0.1" min="0" value={bid} onChange={evt => setBid(parseFloat(evt.target.value))} required />
                </div>
                <div className="buttons">
                    <button onClick={() => sendBid({ name, bid })}>Send Bid</button>
                    <button onClick={() => history.push('/view-bids')}>View Bids</button>
                </div>
            </div>
        </div>
    )
}

export default SendBid
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'

import ListBids from '../components/ListBids'

const ViewBids = () => {
    const history = useHistory();
    const [listBids, setListBids] = useState([])
    const [listSingleBids, setListSingleBids] = useState([])

    const createSingleBidsList = () => {
        let singleBids = []

        for (let i = 0; i < listBids.length; i++) {
            let repeat = 0
            for (let j = 0; j < listBids.length; j++) {
                if (listBids[i].bid === listBids[j].bid) repeat += 1
            }
            if (repeat === 1) singleBids.push(listBids[i].bid)
        }

        return singleBids
    }

    const getBids = async () => {
        const response = await axios.get('/server-view-bids')
        return response.data
    }

    useEffect(() => {
        async function fetchBids() {
            const response = await getBids();
            setListBids(response);
        }
        fetchBids();
    }, [setListBids])

    return (
        <div className="main">
            <h1 className='title'>Lowest single value</h1>
            <span className='info'>See who's winning</span>
            <div className="viewBids">
                {
                    listBids.length !== 0 ?
                        <ListBids list={listBids} singleBids={createSingleBidsList()} />
                        :
                        ''
                }
            </div>
            <button onClick={() => history.push('/')}>Back to send bid</button>
        </div>
    )
}

export default ViewBids
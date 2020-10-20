import React from 'react'

const ListBids = props => {
    let i = 0

    props.list.sort(function (a, b) {
        var aValue = a.bid
        var bValue = b.bid
        
        return (aValue < bValue) ? -1 : 1;
    });

    const listB = props.list.map((bidItem, id) => {

        if (props.singleBids.includes(bidItem.bid)) {
            i += 1
            return <li key={id}>{i}. {bidItem.name} - R$ {bidItem.bid}</li>
        }
    })

    return (
        <div className="listBids">
            <ul>
                {listB}
            </ul>
        </div>
    )
}
export default ListBids
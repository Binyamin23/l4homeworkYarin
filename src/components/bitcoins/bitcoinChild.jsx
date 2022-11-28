import React from 'react'

const BitcoinChild = ({ bitcoin, key }) => {
    return (
        <div  className='col-12 col-md-6 col-lg-4 p-2 h-auto'>
            <div className='border shadow p-2 '>
                <div>
                    <h5>{bitcoin.name}</h5>
                    <h6>{bitcoin.symbol}</h6>
                    <p>price_Usd:{bitcoin.price_usd}</p>
                    <p>price_Btc:{bitcoin.price_btc}</p>
                </div>
            </div>
        </div>
    )
}

export default BitcoinChild
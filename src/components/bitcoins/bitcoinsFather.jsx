import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import BitcoinChild from './bitcoinChild'

const BitcoinsFather = () => {
    const [bitcoins, setBitcoin] = useState([])

    const doApi = async () => {
        try {
            let url = 'http://fs1.co.il/bus/bitcoin.php'
            let  {data}  = await axios(url)
            console.log(data);
            setBitcoin(data);
        }
        catch (err) {
            console.log(err.resp)
        }
    }
    useEffect(() => {
        doApi();
    }, [])
    return (
        <div>
             <h1 className='display-3 text-center'>bitcoins</h1>
             <div className='container'>
                <div className='row'>
                    {bitcoins?.map ((item,i)=>(
                        <BitcoinChild bitcoin={item} key={i}/>
                    ))}
                </div>
             </div>
        </div>
    )
}

export default BitcoinsFather
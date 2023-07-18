import React from 'react'
import Chart_1 from './Charts/Chart_1'
import Chart_3 from './Charts/Chart_3'
import Chart_5 from './Charts/Chart_5'
import Chart_4 from './Charts/Chart_4'


function Analytics() {
    const countUsers = 9
    const countProperties = 2572

    return (
        <>
            <div className='chart_block_1'>
                <Chart_1 />
                <div className='charts_2_3'>
                    <div className='chart_2'>
                        <div className='propertiesSold'>
                            <div>
                                <p>Properties Sold</p>
                                <p>{Intl.NumberFormat().format(203)}</p>
                                <p><span className='green'>10% </span> vs last/month</p>
                            </div>
                            <div className='chart2Icon'><p></p></div>
                        </div>
                        <div className='newUsers'>
                            <div>
                                <p>New Users</p>
                                <p>{Intl.NumberFormat().format(countUsers)}</p>
                                <p><span className='green'>22% </span>vs last/week</p>
                            </div>
                            <div className='chart2Icon'><p></p></div>
                        </div>
                        <div className='propertiesForSale'>
                            <div>
                                <p>Properties For Sale</p>
                                <p>{Intl.NumberFormat().format(countProperties)}</p>
                                <p ><span className='red'>-5% </span>vs last/month</p>
                            </div>
                            <div className='chart2Icon'><p></p></div>
                        </div>
                    </div>
                    <Chart_3 />
                </div>
            </div>
            <div className='chart_block_2'>
                <Chart_4 />
                <Chart_5 />
            </div>
        </>

    )
}

export default Analytics
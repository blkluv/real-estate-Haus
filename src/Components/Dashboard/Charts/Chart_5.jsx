import React, { useContext, useEffect, useState } from 'react'

import profilePic from '../../../assets/icons/profile.png'
import { Context } from '../../../assets/Context'

import axios from 'axios'

function Chart_5() {
    const { SERVER_URL } = useContext(Context)
    const [admins, setAdmins] = useState([])
    useEffect(() => {
        axios.get('http://localhost/getAdmins?limit=5')
            .then(res => setAdmins(res.data))
            .catch(err => console.log(`Error: ${err}`))
    }, [])

    return (
        <div className='chart_5 chart_div'>
            <div className='titleChat'>
                <p>Latest Admins and Managers</p>
                <p>Total Users: <span>100</span></p>
            </div>
            <div className='allUsersAnalysis'>
                {(!admins) ? (
                    <p>Loading...</p>
                ) : (
                    admins.map((user, i) => (
                        <div className='userRowChart'>
                            <div className={`profile profileUser ${user.image ? 'imageSet' : ''}`}>
                                <p className='profilePicItem'>
                                    <img className='profilePic' src={user.image ? `${SERVER_URL}/images/${user.image}` : profilePic} alt="" />
                                </p>
                            </div>
                            <p className='userEmailChart'>{user.email}</p>
                            <hr />
                            <div className='userRoleChart'>
                                <p className={user.role}>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
                            </div>
                        </div>
                    ))

                )}
            </div>
        </div>
    )
}

export default Chart_5
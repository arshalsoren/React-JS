import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'

function CompF() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            User - {user}<br>
            </br>
            Channel - {channel}
        </div>
    )
}

export default CompF

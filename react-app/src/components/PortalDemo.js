import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>
            Portal Demo
        </h1>,
        document.getElementById('portal-root')
    )

}

export default PortalDemo

// Portals are used to add JSX or even COMPONENTS in a new div in ./index.html/body/new div
// i.e other than the existing <div id="root"> 
import React from 'react'
import Menu from './Menu'
import Task from './Task'

export default function Header() {
    return (
        <>
            <div style={{backgroundColor: '#27133a'}}>
                <Task/>
            </div>

            <div style={{backgroundColor: '#41225d'}}>
                <Menu />
            </div>
            
        </>
    )
}

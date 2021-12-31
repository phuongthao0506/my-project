import React from 'react'
import ListCoins from './ListCoins'
import About from './About'
import ListNews from './ListNews'

export default function Home() {
    return (
        <>
            <About/>
            <ListCoins />
            <ListNews/>
        </>
    )
}

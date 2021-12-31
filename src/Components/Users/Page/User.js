import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Home from './Home'
import Transaction from './Transaction'
import Coinnew from './Coinnew'
import News from './News'
import Contact from './Contact'
import Login from './Login'
import Registration from './Registration'
import Account from './Account'
import Wallets from './Wallets'

export default function User() {
    return (
        <>
            <Router>
                <Header/>
                    <Switch>
                        <Route path="/my-project" exact component={Home} />
                        <Route path="/transaction" component={Transaction} />
                        <Route path="/coinnew" component={Coinnew} />
                        <Route path="/news" component={News} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/login" component={Login} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/account" component={Account} />
                        <Route path="/wallets" component={Wallets} />
                    </Switch>
                <Footer />
            </Router>
        </>
    )
}

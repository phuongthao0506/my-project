import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light d-block">
                <div className="row">
                    <div className="col-7">
                        <a className="navbar-brand text-white" >LOGO</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-5 text-right">
                        <div className="collapse navbar-collapse mr-auto" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <Link to="/my-project">
                                    <li className="nav-item active">
                                        <span className="nav-link text-white">Trang chủ<span className="sr-only">(current)</span></span>
                                    </li>
                                </Link>
                                <Link to="/transaction">
                                    <li className="nav-item">
                                        <span className="nav-link text-white">Mua & Bán</span>
                                    </li>
                                </Link>
                                <Link to="/coinnew">
                                    <li className="nav-item">
                                        <span className="nav-link text-white">Coin mới</span>
                                    </li>
                                </Link>
                                <Link to="/news">
                                    <li className="nav-item">
                                        <span className="nav-link text-white">Tin tức</span>
                                    </li>
                                </Link>
                                <Link to="/contact">
                                    <li className="nav-item">
                                        <span className="nav-link text-white">Liên hệ</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

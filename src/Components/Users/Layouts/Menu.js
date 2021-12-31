import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light d-block">
                <div className="row">
                    <div className="col-3">
                        <a className="navbar-brand" >LOGO</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-9 text-right">
                        <div className="collapse navbar-collapse mr-auto" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <Link to="/">
                                    <li className="nav-item active">
                                        <span className="nav-link" >Trang chủ<span className="sr-only">(current)</span></span>
                                    </li>
                                </Link>
                                <Link to="/transaction">
                                    <li className="nav-item">
                                        <span className="nav-link" >Mua & Bán</span>
                                    </li>
                                </Link>
                                <Link to="/coinnew">
                                    <li className="nav-item">
                                        <span className="nav-link" >Coin mới</span>
                                    </li>
                                </Link>
                                <Link to="/news">
                                    <li className="nav-item">
                                        <span className="nav-link" >Tin tức</span>
                                    </li>
                                </Link>
                                <Link to="/contact">
                                    <li className="nav-item">
                                        <span className="nav-link" >Liên hệ</span>
                                    </li>
                                </Link>
                                <Link to="/login">
                                    <li className="nav-item">
                                        <span className="nav-link" >Đăng nhập</span>
                                    </li>
                                </Link>
                                <Link to="/registration">
                                    <li className="nav-item">
                                        <span className="nav-link" >Đăng kí</span>
                                    </li>
                                </Link>
                                <Link to="/account">
                                    <li className="nav-item">
                                        <span className="nav-link" >Tài khoản</span>
                                    </li>
                                </Link>
                                <Link to="/logout">
                                    <li className="nav-item">
                                        <span className="nav-link" >Đăng xuất</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

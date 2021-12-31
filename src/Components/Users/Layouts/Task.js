import React from 'react'
import { Link } from 'react-router-dom'

export default function Task() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Link to="/wallets" className="text-white text-decoration-none nav-link">Số dư VDNR : 10,000,000,000 vnđ</Link>
                    </div>
                    <div className="col-6 text-right">
                        <div className="row">
                            <div className="col-4">
                                <Link to="/login">
                                    <span className="nav-link text-white">Đăng nhập</span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/registration">
                                    <span className="nav-link text-white">Đăng kí</span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <div className="dropdown">
                                    <button className="dropdown-toggle text-white nav-link btn" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Tài khoản
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="triggerId">
                                        <Link to="/account">
                                            <span className="nav-link text-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle mr-2" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                                </svg>
                                                Hồ sơ
                                            </span>
                                        </Link>
                                        <Link to="/logout">
                                                <span className="nav-link text-dark">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left mr-2" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                                    </svg>
                                                    Đăng xuất
                                                </span>
                                        </Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'

export default function ListCoins() {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-9">
                        <h3>Danh sách coin</h3>
                    </div>
                    <div className="col-3">
                        <input type="search" name="search" placeholder="Tìm kiếm" className="form-control" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <b>Tên coin</b>
                    </div>
                    <div className="col-2">
                        <b>BIẾN ĐỘNG GIÁ 24H</b>
                    </div>
                    <div className="col-2">
                        <b>GIÁ (USDT)</b>
                    </div>
                    <div className="col-3">
                        <b>KHỐI LƯỢNG 24H</b>
                    </div>
                    <div className="col-2">
                        <b>THAO TÁC</b>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row">
                        <div className="col-3">
                            <div className="media">
                                <img src="./bitcoin.png" className="mr-3" alt="..." />
                                <div className="media-body">
                                    <h5 className="mt-0">Bitcoin</h5>
                                    BTC
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                        <span className="text-success">+ 1.36%</span>
                        </div>
                        <div className="col-2">
                        <b>47,949.96</b>
                        </div>
                        <div className="col-3">
                        35,404,434,890.92
                        </div>
                        <div className="col-2">
                            <button className="btn btn-secondary">Đầu tư</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="media">
                                <img src="./bitcoin.png" className="mr-3" alt="..." />
                                <div className="media-body">
                                    <h5 className="mt-0">Bitcoin</h5>
                                    BTC
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                        <span className="text-success">+ 1.36%</span>
                        </div>
                        <div className="col-2">
                        <b>47,949.96</b>
                        </div>
                        <div className="col-3">
                        35,404,434,890.92
                        </div>
                        <div className="col-2">
                            <button className="btn btn-secondary">Đầu tư</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="media">
                                <img src="./bitcoin.png" className="mr-3" alt="..." />
                                <div className="media-body">
                                    <h5 className="mt-0">Bitcoin</h5>
                                    BTC
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                        <span className="text-success">+ 1.36%</span>
                        </div>
                        <div className="col-2">
                        <b>47,949.96</b>
                        </div>
                        <div className="col-3">
                        35,404,434,890.92
                        </div>
                        <div className="col-2">
                            <button className="btn btn-secondary">Đầu tư</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="media">
                                <img src="./bitcoin.png" className="mr-3" alt="..." />
                                <div className="media-body">
                                    <h5 className="mt-0">Bitcoin</h5>
                                    BTC
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                        <span className="text-success">+ 1.36%</span>
                        </div>
                        <div className="col-2">
                        <b>47,949.96</b>
                        </div>
                        <div className="col-3">
                        35,404,434,890.92
                        </div>
                        <div className="col-2">
                            <button className="btn btn-secondary">Đầu tư</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'

export default function ListNews() {
    return (
        <>
          <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <h3>Tin tức</h3>  
                    <p>Cập nhật chính xác hàng ngày, giúp bạn nắm bắt cơ hội, 
                        ra quyết định đầu tư tiền ảo chính xác và nhanh chóng hơn bao giờ hết.</p>
                    <div class="d-flex flex-wrap">
                        <div className="border p-2 mr-2"><b>ALL</b></div>
                        <div className="border p-2 mr-2"><b>BTC</b></div>
                        <div className="border p-2 mr-2"><b>ETH</b></div>
                        <div className="border p-2 mr-2"><b>BCH</b></div>
                        <div className="border p-2 mr-2"><b>LTC</b></div>
                        <div className="border p-2 mr-2"><b>XRP</b></div>
                        <div className="border p-2 mr-2"><b>EOS</b></div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-6">
                                Remitano.com  2 năm trước
                            </div>
                            <div className="col-6 text-right">
                                <span>BTC</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <span>Chuyên gia: Bitcoin sẽ chạm mức “khủng” này trong năm 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

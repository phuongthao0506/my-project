import React from 'react'

export default function Account() {
    return (
        <>
          <div style={{backgroundColor: '#27133a'}}>
            <div className="container pt-3 pb-3">
              <h4 className="text-white">Thông tin cá nhân</h4>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-6">
                <ul className="list-group">
                  <li className="list-group-item" style={{backgroundColor: '#ebecf0'}}><h4>Tóm lược về hoangchibao29062000</h4></li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                        Đã giao dịch
                      </div>
                      <div className="col-8 d-flex flex-wrap">
                        <small className="p-2 mr-2 border rounded-pill bg-warning">
                          0.00000000 BTC
                        </small>
                        <small className="p-2 mr-2 border rounded-pill bg-danger">
                          0.0000 USDT
                        </small>
                        <small className="p-2 mr-2 border rounded-pill bg-success">
                          0.0000 XRP
                        </small>
                        <small className="p-2 mr-2 border rounded-pill bg-primary">
                          0.00000000 BNB
                        </small>
                        <small className="p-2 mr-2 border rounded-pill bg-secondary">
                          0.00000000 ETH
                        </small>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                        Số giao dịch thành công
                      </div>
                      <div className="col-8">
                        3
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                      Số lượng đối tác khác nhau
                      </div>
                      <div className="col-8">
                        2
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                      Điểm số phản hồi
                      </div>
                      <div className="col-8">
                        10
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                      Tài khoản được tạo
                      </div>
                      <div className="col-8">
                        19/02/2019
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                        Lần truy cập cuối
                      </div>
                      <div className="col-8">
                        13:16:25 31/12/2021
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                      Xác minh nhân thân và cư trú
                      </div>
                      <div className="col-8">
                        Chưa gửi
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                      Chứng nhận ngang hàng
                      </div>
                      <div className="col-8">
                      Chưa được chứng nhận
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                      Xác minh ngân hàng
                      </div>
                      <div className="col-8">
                      Chưa gửi
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">
                      Số điện thoại
                      </div>
                      <div className="col-8">
                      <p>Chưa gửi</p>
                      <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                        Thêm số điện thoại
                      </button>

                      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-12">
                        
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <div className="">
                  <h2>Phản hồi về hoangchibao29062000</h2>
                  Không có phản hồi
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

import React from 'react'

export default function About() {
    return (
        <>
          <div style={{backgroundColor: '#27133a'}}>
                <div className="text-center text-white pt-5 pb-2">
                    <h1>Bạn muốn kiếm lợi nhuận với tiền điện tử?</h1>
                    <p>Lướt sóng trên Remitano là cách dễ nhất để làm điều này</p>
                    <button className="btn" style={{backgroundColor: '#9b59b6'}}>Bắt đầu</button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card border-0" style={{backgroundColor: '#27133a'}}>
                                <div className="card-body">
                                    <p className="card-text">
                                    <div className="media">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-coin mr-2" viewBox="0 0 16 16">
                                            <path className="text-white" d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9div.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                                            <path className="text-white" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path className="text-white" d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                                        </svg>
                                        <div className="media-body">
                                            <div className="mt-0 text-white h5">Nhanh chóng</div>
                                            <span className="text-white">Mọi giao dịch được hoàn thành tức thì</span>
                                        </div>
                                    </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card border-0" style={{backgroundColor: '#27133a'}}>
                                <div className="card-body">
                                    <p className="card-text">
                                    <div className="media">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-shield-check mr-2" viewBox="0 0 16 16">
                                            <path className="text-white" d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                            <path className="text-white" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                        <div className="media-body">
                                            <div className="mt-0 text-white h5">Nhanh chóng</div>
                                            <span className="text-white">Mọi giao dịch được hoàn thành tức thì</span>
                                        </div>
                                    </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card border-0" style={{backgroundColor: '#27133a'}}>
                                <div className="card-body">
                                    <p className="card-text">
                                    <div className="media">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-headset mr-2" viewBox="0 0 16 16">
                                            <path className="text-white" d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                                        </svg>
                                        <div className="media-body">
                                            <div className="mt-0 text-white h5">Nhanh chóng</div>
                                            <span className="text-white">Mọi giao dịch được hoàn thành tức thì</span>
                                        </div>
                                    </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

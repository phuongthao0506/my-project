import React from 'react'

export default function Login() {
  return (
        <>
          
            <div className='container' >
            <div className='row'>
              <div className='col-7'>
                
                <img src="https://kienthucmmo.vn/wp-content/uploads/2020/09/altcoin.jpg" 
                    style={{width:'100%',
                            paddingTop:'16px'}} />
                
              </div>
              
                
                  <div className='col-5'>
                  <h2 style={{textAlign:'center'}}>Sign In to <strong>MyCoin</strong></h2>
                    <form action="#" method="post">
                    <div className="form-group first">
                      <label for="username">Username</label>
                      <input type="text" className="form-control" id="username" 
                      style={{ border: '2px solid ',
                               borderRadius: '4px',
                               width: '100%',
                               padding: '12px 20px',
                               margin: '8px 0',
                               boxSizing: 'border-box'}} />
                    </div>
                    <div className="form-group last mb-4">
                      <label for="password">Password</label>
                      <input type="password" className="form-control" id="password" 
                      style={{ border: '2px solid ',
                               borderRadius: '4px',
                               width: '100%',
                               padding: '12px 20px',
                               margin: '8px 0',
                               boxSizing: 'border-box'}} />
                    </div>
                    <div className="d-flex mb-5 align-items-center">
                      <label className="control control--checkbox mb-0"><span className="caption">Remember me</span> 
                      <span> </span>
                      <input type="checkbox" checked />
                      <div className="control__indicator"></div>
                      </label>
                      <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                    </div>
                    <input type="submit" value="Log In" className="btn btn-pill text-white btn-block btn-primary" 
                        style={{width: '50%',
                                backgroundColor: 'purple',
                                color: 'white',
                                padding: '14px 20px',
                                margin: '8px 0',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                textAlign:'center',
                                marginLeft:'30%'}} />
                  </form>
                
                </div>
                </div>
                    
          </div>
        </>
    )
}

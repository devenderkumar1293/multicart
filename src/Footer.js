import React from 'react';
// import discover from './img/discover.png';
// import americanexpress from './img/american-express.png';
// import mastercard from './img/mastercard.png';
// import paypal from './img/paypal.png';

function Footer() {
  return (
    <div>
      <div className='container footer'>

        <div className='row align-item justify-space-between '>
          <div className='col-6'>
            <h3 className=''>KNOW IT ALL FIRST!</h3>
            <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
          </div>
          <div className='col-6'>
            <input
              className='p-3 flex w-full rounded-md text-black footer_email'
              type='email'
              name='Email'
              placeholder='Enter Email'
              required />
            <button className='btn-solid btn text_big' type='submit'>Subscribe</button>
          </div>
        </div>

        <div className='row'>
          <div className='divider'></div>
        </div>

        <div className='row'>

          <div className='col-40'>
            <img src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/icon/logo.png" alt="Multikart Logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <ul type='none' className='footer_icon'>
              <li><i className="fa-brands fa-facebook" style={{ color: "#000", fontSize: "24px" }}></i></li>
              <li><i className="fa-brands fa-google" style={{ color: "#000", fontSize: "24px" }}></i></li>
              <li><i className="fa-brands fa-twitter" style={{ color: "#000", fontSize: "24px" }}></i></li>
              <li><i className="fa-brands fa-instagram" style={{ color: "#000", fontSize: "24px" }}></i></li>
              <li><i className="fa-solid fa-rss" style={{ color: "#000", fontSize: "24px" }}></i></li>
            </ul>
          </div>

          <div className='col-20'>
            <h3 className='text_big'>My Account</h3>
            <ul type='none'>
              <li><a href='#'>womens </a></li>
              <li><a href='#'>clothing </a></li>
              <li><a href='#'>accessories </a></li>
              <li><a href='#'>featured </a></li>
            </ul>
          </div>

          <div className='col-20'>
            <h3 className='text_big'>why we choose</h3>
            <ul type='none'>
              <li><a href='#'>shipping & return</a></li>
              <li><a href='#'>secure shopping </a></li>
              <li><a href='#'>gallary </a></li>
              <li><a href='#'>affiliates </a></li>
              <li><a href='#'>contacts </a></li>
            </ul>
          </div>

          <div className='col-20'>
            <h3 className='text_big'>store information</h3>
            <ul type='none'>
              <li><a href='#'>shipping & return</a></li>
              <li><a href='#'>clothing </a></li>
              <li><a href='#'>accessories </a></li>
              <li><a href='#'>featured </a></li>
            </ul>
          </div>

        </div>

        <div className='row'>
          <div className='col-6'>
            <p><i className='fa fa-copyright'></i> 2023-24 themeforest powered by pixelstrap</p>
          </div>
          <div className='col-6'>
             <ul type='none' className='flex'>
                {/* <li><img src={discover}></img></li>
                <li><img src={americanexpress}></img></li>
                <li><img src={mastercard}></img></li>
                <li><img src={paypal}></img></li> */}
             </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
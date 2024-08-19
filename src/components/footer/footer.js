import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="mn">
        <div className="top">
          <div >
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from metta muse</p>
            <input type="text" placeholder="Enter your e-mail" />
            <button>SUBSCRIBE</button>
          </div>
          <div>
            <h3>CONTACT US</h3>
            <p>+44 2211335630</p>
            <p>customercare@mettamuse.com</p>
            <h3>CURRENCY</h3>
            <h4>USD</h4>
            <span>
              Transactions will be completed in Euros and a currency reference
              available on hover
            </span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="btm">
            <div className="itmm">
              <h3>metta muse</h3>
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>
            <div className="itmm">
              <h3>QUICK LINKS</h3>
              <p>Orders and Shippings</p>
              <p>Join/Login as a seller</p>
              <p>Payments and pricing</p>
              <p>Return and refund</p>
              FAQ'scelerisque<p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </div>
            <div className="itmm">
              <img src="./social.png" alt="social" />
              <h6>metta muse ACCEPTS</h6>
              <img src="./payment.png" alt="payment" width={200}/>
            </div>
          </div>
        </div>
        <p className="copy">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;

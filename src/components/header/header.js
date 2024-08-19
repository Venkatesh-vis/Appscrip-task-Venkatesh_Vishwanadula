import "./header.css";
const Header = () => {
  return (
    <>
      <div className="hm">
        <div className="lor">
          <div className="lorem">
            <img
              src="../element-4.png"
              height={15}
              alt="element"
              title="lorem"
            />
            <p>lorem ipsum</p>
          </div>
          <div className="lorem">
            <img
              src="../element-4.png"
              height={15}
              alt="element"
              title="lorem"
            />
            <p>lorem ipsum</p>
          </div>
          <div className="lorem">
            <img
              src="../element-4.png"
              height={15}
              alt="element"
              title="lorem"
            />
            <p>lorem ipsum</p>
          </div>
        </div>
        <div className="sec">
          <div>
            <img src="../Logo.png" alt="logo" height={30} title="logo" />
          </div>
          <div>
            <h1 className="logo">LOGO</h1>
          </div>
          <div>
            <img src="../Icons.png" alt="logo" height={15} />
          </div>
        </div>
        <div className="nav">
          <h5>SHOP</h5>
          <h5>SKILLS</h5>
          <h5>STORIES</h5>
          <h5>ABOUT</h5>
          <h5>CONTACT US</h5>
        </div>
        <hr></hr>
        <div className="txt">
          <h2>DISCOVER OUR PRODUCTS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor
          </p>
        </div>
        <hr className="hfhr" />
      </div>
    </>
  );
};

export default Header;

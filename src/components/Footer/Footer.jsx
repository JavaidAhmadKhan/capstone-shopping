import "./footer.scss";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="footerContainer">
      <p>All rights reserved Wolzon @{year}</p>
      <a
        href="https://javaid-khan.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Javaid Khan{" "}
      </a>
    </div>
  );
};

export default Footer;

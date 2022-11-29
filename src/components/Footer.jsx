import LogoFoot from '../assets/images/logo_footer.svg';
import socialMediaZero from '../assets/images/icon-facebook.svg';
import socialMediaOne from '../assets/images/icon-youtube.svg';
import socialMediaTwo from '../assets/images/icon-twitter.svg';
import socialMediaTree from '../assets/images/icon-pinterest.svg';
import socialMediaFour from '../assets/images/icon-instagram.svg';
import '../assets/styles/components/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <section className="blockSocial">
          <div className="blockSocial__logo">
            <img src={LogoFoot} alt="Logo-footer" />
          </div>
          <div className="blockSocial__socialMedia">
            <img className="blocks" src={socialMediaZero} alt="Facebook" />
            <img src={socialMediaOne} alt="Youtube" />
            <img src={socialMediaTwo} alt="Twitter" />
            <img src={socialMediaTree} alt="Pinterest" />
            <img src={socialMediaFour} alt="Instagram" />
          </div>
        </section>
        <section className="blockDataFooter">
          <div className="blockDataFooter__container">
            <div className="blockDataFooter__data">
              <ul>
                <li className="blockDataFooter__item">About us</li>
                <li className="blockDataFooter__item">Contact</li>
                <li className="blockDataFooter__item">Blog</li>
              </ul>
            </div>
            <div className="blockDataFooter__data">
              <ul>
                <li className="blockDataFooter__item">Careers</li>
                <li className="blockDataFooter__item">Support</li>
                <li className="blockDataFooter__item">Privacity Policy</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="blockDataFooter__End">
          <button type="button" className="blockDataFooter__legend btn">
            <a href="">GitHub repo</a>
          </button>
          <p className="blockDataFooter__legend rights">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

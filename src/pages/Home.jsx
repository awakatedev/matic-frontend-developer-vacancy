import bgIntroM from '../assets/images/bg-intro-desktop.svg';
import bgIntro from '../assets/images/image-mockups.png';
import onlineIconOne from '../assets/images/icon-online.svg';
import onlineIconTwo from '../assets/images/icon-budgeting.svg';
import onlineIconTree from '../assets/images/icon-onboarding.svg';
import onlineIconFour from '../assets/images/icon-api.svg';
import '../assets/styles/components/articles.scss';
import '../assets/styles/components/recomendation.scss';

import useSeo from '../hooks/useSeo';
import BlogPost from '../components/BlogPost';

const Home = () => {
  useSeo({
    title: 'Home',
    description:
      'This is the Jhonathan Saldarriagas technical-logical test for the front-end developer vacancy at Matic.io.',
  });

  return (
    <main className="container">
      <div className="container__hero">
        <section className="blockHeader">
          <img className="blockHeader__img" src={bgIntro} alt="" />
          <img
            className="blockHeader__backgroundImg"
            src={bgIntroM}
            alt="wireframes"
          ></img>
          <div className="blockHeader__data">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be
              one-stop-shop for spending. saving. building. investing. and much
              more.
            </p>
            <button type="button" className="btn">
              Request Invite
            </button>
          </div>
          <div className="blockHeader-PhoneImg" />
        </section>
      </div>

      <div className="container__mainContent">
        <section className="blockRecomendation">
          <div className="blockRecomendation__data">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <section className="blockRecomendation__cards">
            <article className="card">
              <img src={onlineIconOne} alt="Online" />
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </article>
            <article className="card">
              <img src={onlineIconTwo} alt="Budgeting" />
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Recive
                notifications when you're close to hitting your limits.
              </p>
            </article>
            <article className="card">
              <img src={onlineIconTree} alt="Onboarding" />
              <h3>Fast Onboarding</h3>
              <p>
                We don't do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </article>
            <article className="card">
              <img src={onlineIconFour} alt="API" />
              <h3>Open API</h3>
              <p>
                Manage your savings. investments, pension, and much more from
                one account. Traking your money has never been easier.
              </p>
            </article>
          </section>
        </section>
      </div>

      <BlogPost />
    </main>
  );
};

export default Home;

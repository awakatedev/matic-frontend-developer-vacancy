import img1 from '../assets/images/image-currency.jpg';
import img2 from '../assets/images/image-restaurant.jpg';
import img3 from '../assets/images/image-plane.jpg';
import img4 from '../assets/images/image-confetti.jpg';
import '../assets/styles/components/blogPost.scss';

const BlogPost = () => {
  return (
    <div className="container__Articles">
      <section className="blockArticles">
        <h2>Latest Articles</h2>
        <div className="blockArticles__articles">
          <article className="articleBox">
            <div className="articleImg">
              <img src={img1} alt="currency" />
            </div>
            <div className="articleBox__data">
              <i>By Claire Robinson</i>
              <h3>Recive money in any currency with no fees</h3>
              <p>
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single ...
              </p>
            </div>
          </article>
          <article className="articleBox">
            <div className="articleImg">
              <img src={img2} alt="Restaurant" />
            </div>
            <div className="articleBox__data">
              <i>By Wilson Hutton</i>
              <h3>Treat yourself without worrying about money</h3>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you ...
              </p>
            </div>
          </article>
          <article className="articleBox">
            <div className="articleImg">
              <img src={img3} alt="plane" />
            </div>
            <div className="articleBox__data">
              <i>By Wilson Hutton</i>
              <h3>Take your Easybank card wherever you go</h3>
              <p>
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad. We'll even show you
                ...
              </p>
            </div>
          </article>
          <article className="articleBox">
            <div className="articleImg">
              <img src={img4} alt="confetti" />
            </div>
            <div className="articleBox__data">
              <i>By Claire Robinson</i>
              <h3>Our invite-only Beta account are now live!</h3>
              <p>
                After a lot of hard work by the whole team, we're wxcited to
                launch our closed beta. It's easy to request an inite through
                the site ...
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
export default BlogPost;

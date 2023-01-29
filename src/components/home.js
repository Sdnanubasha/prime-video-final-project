import React from "react";
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';

const home = () => {
  const auth = localStorage.getItem('user');
  return (
    <>
    {auth ?<>
    <Dashboard />
    </>
    :
    <>
      <div className="welcome-banner ">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-lg-5 left-sidebar">
              <h1 id="fixed">Welcome to Prime Video</h1>
              <h4 id="fixed">
                Join prime to watch the latest movies,exclusive TV showsas well
                as award-winning Amazon Originals
              </h4>
              <div className="row">
                <div className="col-sm-7 text-center cta-block">
                  {auth ?
                <Link style={{textDecoration:"none"}}><button type="button" className="btn btn-primary btn-block">
                    Join Prime
                  </button></Link>:
                  <Link style={{ "textDecoration": "none" }} to="/signup"><button type="button" className="btn btn-primary btn-block">
                    Join Prime
                  </button></Link>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-image-left">
        <div className="container">
          <div className="row">
            <div className="col-sm-offset-7 col-sm-5 right-sidebar cta-block-button">
              <h1>
                <span>Great Entertainment</span>{" "}
              </h1>
              <h4>
                With your Prime membership, you have access to exclusive Amazon
                Originals, blockbuster Bollywood movies.
              </h4>
              {auth ?
                <Link style={{textDecoration:"none"}}><button type="button" className="btn btn-primary btn-block">
                    Get Sarted
                  </button></Link>:
                  <Link style={{ "textDecoration": "none" }} to="/signup"><button type="button" className="btn btn-primary btn-block">
                    Get Started
                  </button></Link>
                  }
            </div>
          </div>
        </div>
      </div>

      <div className="banner-image-right">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 left-sidebar cta-block-button">
              <h1>One membership, many benefits</h1>
              <h4>
                Your Prime membership now also includes ad-free music along with
                unlimited free, fast delivery on eligible items, exclusive
                access to deals & more.
              </h4>
              {auth ?
                <Link style={{textDecoration:"none"}}><button type="button" className="btn btn-primary btn-block">
                    Get Sarted
                  </button></Link>:
                  <Link style={{ "textDecoration": "none" }} to="/signup"><button type="button" className="btn btn-primary btn-block">
                    Get Started
                  </button></Link>
                  }
              <p>*Go to amazon.in/prime for ore information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-remote">
        <div className="container">
          <div className="row">
            <div className="col-sm-offset-7 col-sm-5 right-sidebar cta-block-button">
              <h1>Even better with Fire TV Stick</h1>
              <p>
                The biggest movies and TV shows are always better on a big
                screen. Simply plug in your Amazon Fire TV Stick and stream on
                any HDTV. Press the voice button on the remote and say the name
                of the title you want to watch to find it in seconds.
              </p>
              {auth ?
                <Link style={{textDecoration:"none"}}><button type="button" className="btn btn-primary btn-block">
                    Get Sarted
                  </button></Link>:
                  <Link style={{ "textDecoration": "none" }} to="/signup"><button type="button" className="btn btn-primary btn-block">
                    Get Started
                  </button></Link>
                  }
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="container">
          <div className="row text-center banner-middle">
            <div className="col-sm-4">
              <img
                src="https://i.postimg.cc/DwWRqWWh/1.png"
                alt="Watch anywhere"
                className="img-responsive"
              />
              <h1>Watch anywhere</h1>
              <p>
                Enjoy from the web or with the Prime Video app on your phone,
                tablet, or select Smart TVs — on up to 3 devices at once.
              </p>
            </div>

            <div className="col-sm-4">
              <img
                id="img-journey"
                src="https://i.ibb.co/R0KKcW7/journey.png"
                alt="download and go"
                className="img-responsive"
              />
              <h1>Download and go</h1>
              <p>
                Watch offline on the Prime Video app when you download titles to
                your iPhone, iPad, Tablet, or Android device
              </p>
            </div>
            <div className="col-sm-4">
              <img src="https://i.postimg.cc/zG96pJWg/3.png" alt="Data Saver" className="img-responsive"/>
              <h1>Data Saver</h1>
              <p>
                Control data usage while downloading and watching videos on
                select phones or tablets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-remote-right">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 left-sidebar cta-block-button">
              <h1>
                <span>Family Friendly</span>{" "}
              </h1>
              <h4>
                With easy to use Parental Controls and a dedicated kids page,
                enjoy secure, ad-free kids entertainment. Kids can enjoy popular
                TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
              </h4>
              {auth ?
                <Link style={{textDecoration:"none"}}><button type="button" className="btn btn-primary btn-block">
                    Get Sarted
                  </button></Link>:
                  <Link style={{ "textDecoration": "none" }} to="/signup"><button type="button" className="btn btn-primary btn-block">
                    Get Started
                  </button></Link>
                  }
            </div>
          </div>
        </div>
      </div>

      <div className="banner-anime-left">
        <div className="container">
          <div className="row">
            <div className="col-sm-offset-7 col-sm-5 right-sidebar cta-block-button">
              <h1>
                <span>Watch Anime</span>
              </h1>
              <p>
                With easy to use Parental Controls and a Anime page, enjoy
                secure, ad-free entertainment. Everyone can enjoy popular TV
                shows like One Piece, Naruto, and Dragon ball z.
              </p>
              {auth ?
                <Link style={{textDecoration:"none"}}><button type="button" className="btn btn-primary btn-block">
                    Get Sarted
                  </button></Link>:
                  <Link style={{ "textDecoration": "none" }} to="/signup"><button type="button" className="btn btn-primary btn-block">
                    Get Started
                  </button></Link>
                  }
            </div>
          </div>
        </div>
      </div>
      </>
    }
    </>
  );
};

export default home;

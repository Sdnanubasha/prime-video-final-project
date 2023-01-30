import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

const Header = (props) => {
  const auth = localStorage.getItem('user');
  const [navLinks, setNavLinks] = useState([]);
  const [mode, setMode] = useState("lightmode");
  const navigate = useNavigate();
  const Logout = () =>{
    localStorage.clear();
    navigate('/signup');
  }
  const darkmode = () => {
    if (mode === "lightmode") {
      setMode("darkmode");
    } else {
      setMode("lightmode");
    }
  };
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  useEffect(() => {
    const navs = [
      { name: "Amazon Originals", path: "/amazon-originals" },
      { name: "Movies", path: "/movies" },
      { name: "Tv", path: "/tv" },
      { name: "Kids", path: "/kids" },
      { name: "Ainme", path: "/anime" },
    ];
    setNavLinks(navs);
  }, []);

  let y=document.getElementById('weather');

  const geolocation = () => {
    if(navigator.geolocation){
      // window.location.reload(false);
      navigator.geolocation.getCurrentPosition(showPosition)
    }else{
      y.innerText = "Geo Not Supported"
    }
  }

  const showPosition = (data) => {
    console.log(data);
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    ///api calling
    fetch(url,{method: 'GET'})
    //return promise
    .then((res) => res.json())
    //return data
    .then((data) => {
      console.log(data)
      let city = data.city.name
      let temp = data.list[0].temp.day
      y.innerText = `${city}/${temp} °C`
    })
  }

  return (
    <>
        <nav className="nav navbar-inverse navbar-fixed-top main-header">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="#" className="navbar-brand" >
                Prime Video
              </Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse container">
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <Link to="#" id="darklight" onClick={() => darkmode()}>
                    <span className="glyphicon glyphicon-adjust">Mode</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="glyphicon glyphicon-home"></span>Home
                  </Link>
                </li>
                {auth ?
                <>
                <li>
                  <Link to="/mystuff">My Stuff</Link>
                </li>
                <li className="dropdown">
                  <Link className="dropdown-toggle" data-toggle="dropdown">
                    Categories<span className="caret"></span>
                  </Link>
                  <ul className="dropdown-menu">
                    {navLinks.map((d, i) => (
                      <li key={i}>
                        <Link to={d.path}>{d.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                </>:
                <></>}
              </ul>
              <ul className="nav navbar-nav navbar-right">
              <li><Link to="#" id="location" onClick={()=>geolocation()}><span class="glyphicon glyphicon-map-marker"></span>Location
              
              </Link></li> 
              <li><Link to="#"><p id="weather"></p></Link>
              </li>
                <li className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span className="glyphicon glyphicon-globe"></span> EN
                    <span className="caret"></span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="#">हिन्दी</Link>
                    </li>
                    <li>
                      <Link to="#">English</Link>
                    </li>
                    <li>
                      <Link to="#">తెలుగు</Link>
                    </li>
                  </ul>
                </li>
                {auth ?
                <li className="log-in">
                  <Link to="/signup" onClick={Logout}>
                    <span className="glyphicon glyphicon-log-out"></span> LogOut [{JSON.parse(auth).name}]
                  </Link>
                </li>
                :
                <>
                <li className="log-in">
                  <Link to="/signup">
                    <span className="glyphicon glyphicon-user"></span> Sign Up
                  </Link>
                </li>
                <li className="log-in">
                  <Link to="/signin">
                    <span className="glyphicon glyphicon-log-in"></span> Sign In
                  </Link>
                </li>
                </>
                }
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Header;

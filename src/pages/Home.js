import * as React from 'react'
import { Link, redirect } from 'react-router-dom';
import '../App.css';
import SimpleImageSlider from "react-simple-image-slider";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cricketimg1 from '../assets/images/cricketimg1.jpg';
import cricketimg2 from '../assets/images/cricketimg2.jpeg';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.jpg';
import img7 from '../assets/images/img7.jpg';
import img9 from '../assets/images/img9.jpg';
import cricketimg3 from '../assets/images/cricketimg2.jpeg';
import cricketimg4 from '../assets/images/cricketimg2.jpeg';
import flag1 from '../assets/icons/us.png';
import flag2 from '../assets/icons/nami.png';
import flag3 from '../assets/icons/flag1.png';
import flag4 from '../assets/icons/flag2.png';
import newzteam from '../assets/images/teams/newzteam.jpeg';
import usteam from '../assets/images/teams/usteam.jpg';
import abdev from '../assets/images/players/abdev.png';
import chris from '../assets/images/players/chris.png';
import david from '../assets/images/players/david.png';
import ResponsiveSlider from '../Components/Slider'
import ONE from '../assets/images/slides/banner.png'
import TWO from '../assets/images/slides/India-win.png'
import THREE from '../assets/images/slides/win.jpg'
import Nav from 'react-bootstrap/Nav';
import ReactPlayer from 'react-player/youtube'
import video from './cricket.mp4';
import LiveScoreComponet from '../Components/Home/LiveScore'
import AricleList from '../Components/Home/ArticleList'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Home() {

  const images = [
    { url: ONE },
    { url: TWO },
    { url: THREE },
    { url: ONE },
    { url: TWO },
    { url: THREE },
    { url: TWO },
  ];

  const Data = [
    {
      heading: 'SUN, NOV 27 2022',
      matches: 'India vs Pakistan, 2nd ODI',
      player: 'Rohit Sharma, Baber Azam',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
      img: flag3,
      img2: flag4,

    },
    {
      heading: 'SUN, NOV 27 2022',
      matches: 'India vs Pakistan, 2nd ODI',
      player: 'Rohit Sharma, Baber Azam',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
      img: flag3,
      img2: flag4,

    },
    {
      heading: 'SUN, NOV 27 2022',
      matches: 'India vs Pakistan, 2nd ODI',
      player: 'Rohit Sharma, Baber Azam',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
      img: flag3,
      img2: flag4,

    },

  ]
  React.useEffect(() => {
    let xButtonTop = document.querySelector('#topBtn');
    if (xButtonTop) {
      xButtonTop.click()
    }
  }, [])

  const Data2 = [
    {
      matches: 'New Zealand vs India, 2nd ODI',
      player: 'Seddon Park, Hamilton',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
    },
    {
      matches: 'New Zealand vs India, 2nd ODI',
      player: 'Seddon Park, Hamilton',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
    },
  ]

  const Data3 = [
    {
      srNo: '1',
      img: flag3,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'India'
    },
    {
      srNo: '2',
      img: flag4,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'Pakistan'
    },
    {
      srNo: '3',
      img: flag1,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'America'
    },
    {
      srNo: '4',
      img: flag4,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'England'
    },
    {
      srNo: '5',
      img: flag3,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'New Zealand'
    },
    {
      srNo: '6',
      img: flag3,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'West Indies'
    },
    {
      srNo: '7',
      img: flag2,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'Banladesh'
    },
    {
      srNo: '8',
      img: flag2,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'Namibia'
    },
  ]

  return (
    <div style={{ marginBottom: 20 }}>
      <div id='top'>

        <ResponsiveSlider slides={images} />
        {/* <marquee className='banner-heading'>Welcome to the Sport Daddy</marquee> */}
        <div style={{ display: 'flex', position: 'absolute', bottom: 300, left: 120, }}>
          <div className='banner-card'>
            See Schedule & Players Details of Every Match
          </div>
          <div className='banner-card'>
            See Live Score & Commentry of every second
          </div>
        </div>
      </div>

      {/* live */}
      <LiveScoreComponet />

      {/* Schedule */}
      <AnimationOnScroll animateIn="animate__fadeInUp  ">
        <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
          <h2 className='heading'>Cricket Schedule</h2>
          {Data.map((item) => (
            <div>
              <Row style={{ backgroundColor: "GhostWhite", paddingTop: 17, height: 50 }}>
                <Col xs={4}>
                  <p style={{ color: "#000" }}>Country
                  </p>
                </Col>
                <Col xs={4}>
                  <p style={{ color: "#000" }}>Players
                  </p>
                </Col>
                <Col xs={4}>
                  <p style={{ color: "#000" }}>{item.heading}
                  </p>
                </Col>
              </Row>

              <div>
                <Row className='' style={{}}>
                  <Col xs={4}>
                    <div className='d-flex'>
                      <p style={{
                        color: "black", alignSelf: 'center',
                        marginRight: 7
                      }}>{item.matches}</p>
                      <div className='d-flex'>
                        <img src={item.img} style={{
                          width: 50,
                          height: 50,
                          marginRight: 5
                        }}></img>
                        <h4 style={{
                          alignSelf: 'center',
                          marginRight: 5,
                          marginTop: 5
                        }}>
                          V/S
                        </h4>
                        <img src={item.img2} style={{
                          width: 50,
                          height: 50
                        }}></img>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <p style={{ color: "grey" }}>{item.player}</p>
                    <p style={{ color: "grey" }}>{item.date}</p>
                  </Col>
                  <Col xs={4}>
                    <p style={{ color: "grey" }}>
                      {item.date_2}</p>
                  </Col>
                </Row>
                <br></br>
              </div>
            </div>
          ))}
        </div>
      </AnimationOnScroll>

      {/* video  */}
      <AnimationOnScroll animateIn="animate__bounceInRight ">
        <div className='bg-section' >
          <h2 className='heading'>Video Hub</h2>
          <div class="containerv">

            <div class="main-box">
              <div class="box one">
                <video
                  poster={img3}
                  height={'400%'}
                  width={'100%'}
                  src={video} controls>
                </video>
              </div>
              <div class="box two">
                <video
                  poster={img4}
                  height={'100%'}
                  width={'100%'}
                  src={video} controls>
                </video></div>
              <div class="box three">  <video
                poster={img7}
                height={'100%'}
                width={'100%'}
                src={video} controls>
              </video></div>
              <div class="box four">  <video
                poster={img9}
                height={'100%'}
                width={'100%'}
                src={video} controls>
              </video></div>
              <div class="box five">  <video
                poster={usteam}
                height={'100%'}
                width={'100%'}
                src={video} controls>
              </video></div>
              <div class="box six">  <video
                poster={newzteam}
                height={'100%'}
                width={'100%'}
                src={video} controls>
              </video></div>
              <div class="box six">  <video
                poster={cricketimg1}
                height={'100%'}
                width={'100%'}
                src={video} controls>
              </video></div>
            </div>
          </div>


        </div>
      </AnimationOnScroll>

      {/* photos  */}
      <AnimationOnScroll animateIn="animate__backInDown ">
        <div className='bg-section' style={{ height: 470 }}>
          <h2 className='heading'>Photos Gallery</h2>
          <div className='d-flex' style={{ marginTop: 60 }}>
            <Link to="gallery">
              <div className='gallery-1'>
                <img src={cricketimg1} className='gallery-img'></img>
                <img src={cricketimg2} className='gallery-img1'></img>
                <img src={img7} className='gallery-img2'></img>
                <h1 style={{ textAlign: 'center', marginTop: 250 }}>Todays Match Photos</h1>
              </div>
            </Link>

            <Link to="gallery">
              <div className='gallery-2'>
                <img src={cricketimg1} className='gallery-img'></img>
                <img src={cricketimg2} className='gallery-img1'></img>
                <img src={cricketimg1} className='gallery-img2'></img>
                <h1 style={{ textAlign: 'center', marginTop: 250 }}>T20 Todays Match Photos</h1>
              </div>
            </Link>

            <Link to="gallery">
              <div className='gallery-3'>
                <img src={cricketimg1} className='gallery-img'></img>
                <img src={cricketimg1} className='gallery-img1'></img>
                <img src={cricketimg2} className='gallery-img2'></img>
                <h1 style={{ textAlign: 'center', marginTop: 250 }}>World Cup Match Photos</h1>

              </div>
            </Link>

            <Link to="gallery">
              <div className='gallery-4'>
                <img src={cricketimg1} className='gallery-img'></img>
                <img src={cricketimg2} className='gallery-img1'></img>
                <img src={newzteam} className='gallery-img2'></img>
                <h1 style={{ textAlign: 'center', marginTop: 250 }}>World Cup Match Photos</h1>
              </div>
            </Link>

          </div>

        </div>

      </AnimationOnScroll>

      {/* ranking  */}
      <AnimationOnScroll animateIn="animate__fadeInUpBig ">
        <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
          <div className='d-flex justify-content-end'>
            <h3 style={{ marginRight: 20, color: '#c93a3e' }}>TEST RANKINGS</h3>
            <h3 style={{ marginRight: 20, borderBottomWidth: 1, borderBottomColor: '#c93a3e' }}>ODI RANKINGS</h3>
            <h3 style={{ marginRight: 20, borderBottomWidth: 1, borderBottomColor: '#c93a3e' }}>T20 RANKINGS</h3>
          </div>
          <h2 className='heading'>ICC CRICKET Rankings</h2>
          <Nav justify variant="tabs" defaultActiveKey="/home" style={{ alignSelf: 'center', marginBottom: 15 }}>
            <Nav.Item>
              <Nav.Link >TEAMS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>BATTING</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>BOWLING</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>ALL-ROUDERS</Nav.Link>
            </Nav.Item>
          </Nav>
          <div>
            <Row style={{ backgroundColor: "GhostWhite", paddingTop: 17, height: 50 }}>
              <Col xs={1}>
                <p style={{ color: "#000" }}>#</p>
              </Col>
              <Col xs={2}>
                <p style={{ color: "#000" }}>Flags</p>
              </Col>
              <Col xs={6}>
                <p style={{ color: "#000" }}>Country</p>
              </Col>
              <Col xs={1}>
                <p style={{ color: "#000" }}>Matches
                </p>
              </Col>
              <Col xs={1}>
                <p style={{ color: "#000" }}>Points
                </p>
              </Col>
              <Col xs={1}>
                <p style={{ color: "#000" }}>Rating
                </p>
              </Col>
            </Row>

            {Data3.map((item) => (
              <div>
                <Row className='' style={{ height: 50, marginTop: -5 }}>
                  <Col xs={1}>
                    <p style={{ color: "grey" }}>{item.srNo}</p>
                  </Col>
                  <Col xs={2}>
                    <img src={item.img} style={{
                      marginTop: -21,
                      width: 50,
                      height: 50
                    }}></img>
                  </Col>
                  <Col xs={6}>
                    <h2 style={{ color: "grey" }}>{item.country}</h2>
                  </Col>
                  <Col xs={1}>
                    <h2 style={{ color: "grey" }}>{item.matches}</h2>
                  </Col>
                  <Col xs={1}>
                    <h2 style={{ color: "grey" }}>{item.points}</h2>
                  </Col>
                  <Col xs={1}>
                    <h2 style={{ color: "grey" }}>{item.rating}</h2>
                  </Col>
                </Row>
                <hr style={{ backgroundColor: 'black' }} />
              </div>
            ))}
          </div>
        </div>

      </AnimationOnScroll>

      {/* world timeline  */}
      <AnimationOnScroll animateIn="animate__lightSpeedInRight ">
        <div className='bg-section' >
          <h2 className='heading'>T20 WORLD CUP TIMELINE</h2>
          <marquee behavior="alternate">
            <div className='d-flex'>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag3} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>Australia</h3>
                <h5 className='year-timeline'>2021</h5>
              </div>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag4} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>West Indies</h3>
                <h5 className='year-timeline'>2016</h5>
              </div>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag3} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>Sri Lanka</h3>
                <h5 className='year-timeline'>2014</h5>
              </div>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag4} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>West Indies</h3>
                <h5 className='year-timeline'>2012</h5>
              </div>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag3} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>India</h3>
                <h5 className='year-timeline'>2021</h5>
              </div>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag4} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>England</h3>
                <h5 className='year-timeline'>2010</h5>
              </div>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag4} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>Pakistan</h3>
                <h5 className='year-timeline'>2007</h5>
              </div>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag3} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>India</h3>
                <h5 className='year-timeline'>2009</h5>
              </div>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag3} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>India</h3>
                <h5 className='year-timeline'>2009</h5>
              </div>
              <div style={{ marginLeft: 20, marginRight: 20 }}>
                <img src={flag3} width="100%" height="70%" className='image-timeline'></img>
                <h3 style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>India</h3>
                <h5 className='year-timeline'>2009</h5>
              </div>
            </div>
          </marquee>

          <Link>
            <h3 className='see-more-home'>See More</h3>
          </Link>
        </div>

      </AnimationOnScroll>

      {/* Quiz  */}
      <AnimationOnScroll animateIn="animate__zoomInUp">
        <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
          <h2 className='heading'>Quiz</h2>
          <div className='quiz-section'>
            <div class="polaroid rotate_right">
              <i className='fa fa-group'> {" "} 60k + Participants</i>
              <h4 className='h4'>T20 Match 2022  Final Quiz.</h4>
              <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
            </div>

            <div class="polaroid rotate_left">
              <i className='fa fa-group '>{" "} 60k + Participants</i>
              <h4 className='light-h4'>TATA IPL 2022  Final Quiz.</h4>
              <p class="light-caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
            </div>

            <div class="polaroid rotate_right">
              <i className='fa fa-group'> {" "} 60k + Participants</i>
              <h4 className='h4'>T20 Match 2022  Final Quiz.</h4>
              <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
            </div>

            <div class="polaroid rotate_left">
              <i className='fa fa-group '>{" "} 60k + Participants</i>
              <h4 className='light-h4'>TATA IPL 2022  Final Quiz.</h4>
              <p class="light-caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
            </div>

            <div class="polaroid rotate_right">
              <i className='fa fa-group'> {" "} 60k + Participants</i>
              <h4 className='h4'>T20 Match 2022  Final Quiz.</h4>
              <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
            </div>
          </div>
        </div>

      </AnimationOnScroll>

      {/*cricket news Editorials 
      <AnimationOnScroll animateIn="animate__pulse ">
        <div className='bg-section'>
          <h2 className='heading'>Cricket News and Editorials</h2>
          <div className='new-part'>
            <Row>
              <Col xs={4}><img className='news-img' src={cricketimg1} width="80%" height="auto"></img>
              </Col>
              <Col xs={8}>
                <Link><h3 className='news-heading'>Rain threat looms large as India eye series-levelling win</h3>
                </Link>
                <p style={{ textAlign: "start", color: "grey", }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                  Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                  <br /> <br />
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p className='p-gray'>Nov 26 2022</p>
                  <p className='see-more'><Link>View More</Link></p>
                </div>
              </Col>
            </Row>
          </div>
          <hr />
          <div className='new-part'>
            <Row>
              <Col xs={4}><img className='news-img' src={cricketimg2} width="80%" height="auto"></img>
              </Col>
              <Col xs={8}>
                <Link><h3 className='news-heading'>Rain threat looms large as India eye series-levelling win</h3>
                </Link>
                <p style={{ textAlign: "start", color: "grey", }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                  Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                  <br /> <br />
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p className='p-gray'>Nov 26 2022</p>
                  <p className='see-more'><Link>View More</Link></p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

      </AnimationOnScroll>
    */}
      {/* India National Cricket Team */}
      <AnimationOnScroll animateIn="animate__fadeInBottomRight ">
        <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
          <h2 className='heading'>India National Cricket Team</h2>
          <Row className="mt-5">
            <Col xs={4}><img className='news-img' src={cricketimg2} width="80%" height="auto"></img>
            </Col>
            <Col xs={8}><h3 className='news-heading'>Rain threat looms large as India eye series-levelling win</h3>
              <p style={{ textAlign: "start", color: "grey" }}>
                Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
              </p>
              <br /> <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className='p-gray'>Nov 26 2022</p>
                <p className='see-more'><Link to='team'>View More</Link></p>
              </div>
            </Col>
          </Row>
        </div>

      </AnimationOnScroll>

      {/* Our Cricket Teams */}
      <AnimationOnScroll animateIn="animate__lightSpeedInLeft ">
        <div className='bg-section'>
          <div className='d-flex justify-content-around'>
            <div className='see-more-home'>{" "}</div>
            <h2 className='heading'>Our Cricket Teams</h2>
            <Link>
              <h3 className='see-more-home'>See More</h3>
            </Link>
          </div>
          <div className='d-flex justify-content-around'>
            <div className='team-img' style={{ width: '100%', height: '100%', margin: 20 }}>
              <img src={cricketimg1} width="100%" height="100%"></img>
              <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10 }}>Indian Cricket Team Players</h2>
            </div>

            <div className='team-img' style={{ width: '100%', height: '100%', margin: 20 }}>
              <img src={usteam} width="100%" height="100%"></img>
              <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10 }}>Us Cricket Team Players</h2>
            </div>
            <div className='team-img' style={{ width: '100%', height: '100%', margin: 20 }}>
              <img src={newzteam} width="100%" height="100%"></img>
              <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10 }}>NewZeland Cricket Team Players</h2>
            </div>

          </div>
        </div>
      </AnimationOnScroll>

      {/* Cricket Players (Our Heroes) */}
      <AnimationOnScroll animateIn="animate__jackInTheBox ">
        <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
          <div className='d-flex justify-content-around'>
            <div className='see-more-home'>{" "}</div>
            <h2 className='heading'>Cricket Players (Our Heroes)</h2>
            <Link>
              <h3 className='see-more-home'>See More</h3>
            </Link>
          </div>
          <Row style={{ marginTop: -20 }}>
            <Col xs={4}>
              <div className='player-card'>
                <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
                <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
              </div>
              <div className='player-card'>
                <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
                <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
              </div>
              <div className='player-card'>
                <img src={david} width="75%" height="100%" style={{ alignSelf: 'center' }}></img>
                <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>David warner</h3>
              </div>

            </Col>
            <Col xs={4}>
              <div className='player-card'>
                <img src={chris} width="70%" height="100%" style={{ alignSelf: 'center' }}></img>
                <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Chris Jordanr</h3>
              </div>
              <div className='player-card'>
                <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
                <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
              </div>
              <div className='player-card'>
                <img src={david} width="75%" height="100%" style={{ alignSelf: 'center' }}></img>
                <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>David warner</h3>
              </div>

            </Col>
            <Col xs={4}>
              <div className='player-card'>
                <img src={david} width="75%" height="100%" style={{ alignSelf: 'center' }}></img>
                <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>David warner</h3>
              </div>
              <div className='player-card'>
                <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
                <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
              </div>
              <div className='player-card'>
                <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
                <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
              </div>

            </Col>
          </Row>

        </div>
      </AnimationOnScroll>

      {/* Latest News and Articles */}
      <AnimationOnScroll animateIn="animate__slideInLeft ">
        <div className='bg-section'>
          <h2 className='heading' style={{ marginBottom: "20px" }}>Latest News and Articles</h2>
          <AricleList />

        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Home;

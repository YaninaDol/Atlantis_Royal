import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
    MDBBtn,
    MDBFooter,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBTypography,
    MDBCard,
    MDBCardBody,
    MDBCardImage
  } from 'mdb-react-ui-kit';

export default function StartPage(){
    const [showBasic, setShowBasic] = useState(false);
  





    return(
            <div>
            
            <header   style={{marginTop:140}}>
      <MDBNavbar   bgColor='blue' expand='lg' >
        <MDBContainer  className='Headercss' fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink  style={{color:'navy'}} aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{color:'navy'}} href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{color:'navy'}} href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{color:'navy'}} href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
        <img
        style={{marginLeft:370, marginTop:-100,marginBottom:60}}

        width={150}
        height={120}
          src='https://www.immostyle.it/images/travelstyle/dubai/logo-atlantis.png'
         
          alt=''
        />
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBBtn className='bookbtn' lg color='light' style={{marginLeft:540,color:'DarkGoldenRod'}}>
        Book Now
      </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

     
    </header>


            <Carousel  >
      <Carousel.Item>
        <img
        height={700}
          className="d-block w-100"
          src="https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/atr/atlantis-the-royal/resort/exterior/atr-exterior-sunset-shot.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'black'}}>WELCOME</h3>
          <p style={{color:'black'}}>Our store is the most bigger in smartphones worlds.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
        height={700}
          className="d-block w-100"
          src='https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/atr/atlantis-the-royal/restaurants/cloud22/exterior/cloud22-exerior-aerial-cropped.jpg'
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
        height={700}
          className="d-block w-100"
          src='https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/atr/atlantis-the-royal/spa/lifestyle/atr-awaken-ladywater-mountains-sunset-2.jpg'
          alt="Third slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          height={700}
          className="d-block w-100"
          src="https://www.atlantis.com/scropper/-/screen/1220/atlantis/dubai/atr/atlantis-the-royal/rooms-suites/suites/sky-pool-villa/interior/atr-sky-pool-villa-terrace-day.jpg"
          alt="Third slide"
        />

      </Carousel.Item>


      <Carousel.Item>
      <video
            className="slider-video "
            src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
      </Carousel.Item>

      

    </Carousel>

            
            </div>
      )
}
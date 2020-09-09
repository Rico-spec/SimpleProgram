import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './Menubar.css';


const menu = () => {
  return (
    <MDBContainer className="content">
      <MDBRow >
        <MDBCol sm="1"></MDBCol>
        <MDBCol sm="1" className="content1"><strong>TimeLine</strong></MDBCol>
        <MDBCol sm="1" className="content1"><strong>Calender</strong></MDBCol>
        <MDBCol sm="1" className="content1"><strong>Statistics</strong></MDBCol>
        <MDBCol sm="8"></MDBCol>
        
      </MDBRow>
      
    </MDBContainer>
  );
}

export default menu;
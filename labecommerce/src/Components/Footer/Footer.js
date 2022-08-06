import React from "react";
import styled from "styled-components";

const SocialMedia = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: blueviolet


`

const SocialMediaIcons = styled.img`
    border: 1px solid black;
    height: 5vh;
    margin: 5px;
    

`


function Footer() {
  return (
    <div>


         <SocialMedia>
            <p>Agende sua viagem conosco!</p>
            <SocialMediaIcons src={"/Img/facebookIcon.png"} alt="Facebook" />
            <SocialMediaIcons src={'/Img/InstagramIcon.png'} alt="Instagram" />
            <SocialMediaIcons src={'/Img/twitterIcon.png'} alt="Twitter" />
            <SocialMediaIcons src={'/Img/whatsIcon.png'} alt="WhatsApp" />
        </SocialMedia> 

    </div>
  );
}

export default Footer;

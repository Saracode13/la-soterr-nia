import React from 'react';
import '../css/FooterNegro.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'


export default function Footer(){
    return(
        <div className="divContainer">
              <h3 id="h3">Avis legals</h3>
              <div className="div2">
                <h3>Segueix-nos</h3>
            
            <div className="div3">
              <a href="https://www.instagram.com/lasoterrania/" rel="noreferrer" target="_blank">
                  <AiFillInstagram />    
              </a> 
              <a href="https://www.facebook.com/La-soterr%C3%A0nia-101259562713131" rel="noreferrer" target="_blank" >
                  <AiFillFacebook/>
              </a>
              <a href="https://www.youtube.com/c/lasoterr%C3%A0nia" rel="noreferrer" target="_blank" >
                  <AiFillYoutube/>
              </a>
            </div>
            </div>
        </div>
    )
  }
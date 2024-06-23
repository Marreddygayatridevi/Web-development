import { Component, OnInit } from '@angular/core';
import {faInstagramSquare}from '@fortawesome/free-brands-svg-icons';
import {faTwitterSquare}from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare}from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare}from '@fortawesome/free-brands-svg-icons';
import {faGooglePlusSquare}from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare}from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  
  faInstagramSquare=faInstagramSquare;
  faTwitterSquare=faTwitterSquare;
  faYoutubeSquare=faYoutubeSquare;
  faFacebookSquare=faFacebookSquare;
  faGooglePlusSquare=faGooglePlusSquare;
  faGithubSquare=faGithubSquare;


}
 
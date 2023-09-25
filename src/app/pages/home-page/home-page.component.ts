import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('scaleInOut', [
      state('in', style({ transform: 'scale(1)' })),
      transition('void => *', [
        style({ transform: 'scale(0)' }),
        animate('500ms ease-in-out'),
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({ transform: 'scale(0)' })),
      ]),
    ]),
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0 }), animate(1000)]),
      transition('* => void', animate(1000, style({ opacity: 0 }))),
    ]),


    //slide one

    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1500ms ease-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('1500ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),


 //rotate one
    trigger('rotateAnimation', [
      state('in', style({ transform: 'rotate(0)' })),
      transition('void => *', [
        style({ transform: 'rotate(-180deg)' }),
        animate('2000ms ease-out'),
      ]),
      transition('* => void', [
        animate('2000ms ease-in', style({ transform: 'rotate(180deg)' })),
      ]),
    ]),

  ],



})
export class HomePageComponent {




}

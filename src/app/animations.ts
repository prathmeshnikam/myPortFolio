import { transition, trigger, style, query, animateChild, group, animate } from '@angular/animations';

const forwardData: string = '0 => 1,1 => 2, 0 => 2,2 => 3, 3 => 4, 4 => 5, 5 => 6, 6 => 7,7 => 8';
const backwardData: string = '8 => 7, 7 => 6, 6 => 5, 5 => 4, 4 => 3, 3 => 2, 2 => 0, 2 => 1,1 => 0';
export const slideInAnimation = [
  trigger('routeAnimation', [
    transition(forwardData, [
      query(':enter, :leave', style({ position: 'fixed', left: '0', top: '0', right: '0', bottom: '0' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ]),
    ]),
    transition(backwardData, [
      query(':enter, :leave', style({ position: 'fixed', left: '0', top: '0', right: '0', bottom: '0' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ]),
    ]),
  ])
]
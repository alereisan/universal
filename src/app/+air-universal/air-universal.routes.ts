// angular
import { Routes } from '@angular/router';

// shared
import { RenderFlag } from '~/app/shared';

// components
import { AirlineDetailContainerComponent } from './airline/airline-detail/airline-detail-container.component';
import { AirlineComponent } from './airline/airline.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'airlines',
        children: [
          {
            path: '',
            component: AirlineComponent,
            data: {
              meta: {
                title: 'PUBLIC.AIR_UNIVERSAL.AIRLINE.PAGE_TITLE',
                description: 'PUBLIC.AIR_UNIVERSAL.META_DESCRIPTION'
              }
            }
          },
          {
            path: 'create',
            component: AirlineDetailContainerComponent,
            data: {
              renderFlag: RenderFlag.Create,
              meta: {
                title: 'PUBLIC.AIR_UNIVERSAL.AIRLINE.AIRLINE_DETAIL.PAGE_TITLE',
                description: 'PUBLIC.AIR_UNIVERSAL.META_DESCRIPTION'
              }
            }
          },
          {
            path: ':id',
            component: AirlineDetailContainerComponent,
            data: {
              renderFlag: RenderFlag.Update,
              meta: {
                title: 'PUBLIC.AIR_UNIVERSAL.AIRLINE.AIRLINE_DETAIL.PAGE_TITLE',
                description: 'PUBLIC.AIR_UNIVERSAL.META_DESCRIPTION'
              }
            }
          }
        ]
      }
    ]
  }
];

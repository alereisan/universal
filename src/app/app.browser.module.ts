// angular
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { REQUEST } from '@nguniversal/express-engine/tokens';

// libs
import { CACHE } from '@ngx-cache/core';
import { BrowserCacheModule, MemoryCacheService } from '@ngx-cache/platform-browser';
import { AuthModule } from '@ngx-auth/core';
import 'hammerjs';

// framework
import { AuthTestingModule } from '~/app/framework/auth/testing';
import { ConsoleService, CoreModule, WindowService } from '~/app/framework/core';

// module
import { AppComponent } from './app.component';
import { AppModule, REQ_KEY } from './app.module';

const windowFactory = () => window;
const consoleFactory = () => console;
const requestFactory = (transferState: TransferState) => transferState.get<any>(REQ_KEY, {});

@NgModule({
  imports: [
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    BrowserCacheModule.forRoot([
      {
        provide: CACHE,
        useClass: MemoryCacheService
      }
    ]),
    CoreModule.forRoot([
      {
        provide: WindowService,
        useFactory: windowFactory
      },
      {
        provide: ConsoleService,
        useFactory: consoleFactory
      }
    ]),
    AuthModule.forRoot(),
    AuthTestingModule,
    AppModule
  ],
  providers: [
    {
      provide: REQUEST,
      useFactory: requestFactory,
      deps: [TransferState]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
}

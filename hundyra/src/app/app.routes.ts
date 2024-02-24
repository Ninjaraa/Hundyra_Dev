import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HemComponent } from './hem/hem.component';
import { BarkborrehundComponent } from './barkborrehund/barkborrehund.component';
import { NinjaComponent } from './ninja/ninja.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { VillkorComponent } from './villkor/villkor.component';

export const routes: Routes = [
    { path: '', component: HemComponent},
    { path: 'barkborrehund', component: BarkborrehundComponent},
    { path: 'om-ninja', component: NinjaComponent},
    { path: 'kontakt', component: KontaktComponent },
    { path: 'villkor', component: VillkorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

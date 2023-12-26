import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenyComponent } from './meny/meny.component';
import { FooterComponent } from './footer/footer.component';
import { HemComponent } from './hem/hem.component';
import { BarkborrehundComponent } from './barkborrehund/barkborrehund.component';

export const routes: Routes = [
    { path: '', component: HemComponent},
    { path: 'barkborrehund', component: BarkborrehundComponent},    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

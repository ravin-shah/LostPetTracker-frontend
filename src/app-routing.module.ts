import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetComponent } from './app/pet/pet.component';

const routes: Routes = [
    {path: '/', component: PetComponent},
    // {path: '/create', component: PetComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
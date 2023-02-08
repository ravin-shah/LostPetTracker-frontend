import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/pet.model';
import { TestSvcService } from '../test-svc.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})

export class PetComponent {
  
  newPet: Pet;
  title = 'first-project';
  pets!: any;
  showFields: boolean = false;
  
  constructor(private svc: TestSvcService) {
    this.pets=svc.get("pets", (response: any) => this.pets=response);
    this.newPet= new Pet();
  }

  markLost(pet: Pet) {
    pet.lost=true;
    console.log(pet);
    this.svc.put("pet", pet);
  }
  markFound(pet: Pet) {
    pet.lost=false;
    this.svc.put("pet", pet);
  }

  addPet() {
    this.newPet = new Pet();
    this.showFields=true;
  }
  
  submitPet() {
    this.showFields=false;
    this.svc.post("pet", this.newPet, (response: any) => this.pets=response);
    // this.pets=this.svc.get("pets", (response: any) => this.pets=response);
  }

  cancelPet() {
    this.showFields=false;
    this.newPet=new Pet();
  }

  delete(pet: Pet) {
    this.svc.delete("pet/"+pet.id, (response: any) => this.pets=response);
  }
  
}
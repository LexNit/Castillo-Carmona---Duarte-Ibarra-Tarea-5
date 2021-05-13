import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-addogs',
  templateUrl: './addogs.page.html',
  styleUrls: ['./addogs.page.scss'],
})
export class AddogsPage implements OnInit {

  //SQLite, forms
  mainForm: FormGroup;
  Data: any[] = []

  constructor(
    //Para el form de SQLite
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    //Inicializado de base de datos y despliegue de canciones
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchDogs().subscribe(item => {
          this.Data = item
        })
      }
    });

    this.mainForm = this.formBuilder.group({
      artist: [''],
      song: ['']
    })
  }

  storeData() {
    this.db.addDog(
      this.mainForm.value.breed,
      this.mainForm.value.size,
      this.mainForm.value.height,
      this.mainForm.value.origin
    ).then((res) => {
      this.mainForm.reset();
    })
  }

  deleteSong(id){
    this.db.deleteDog(id).then(async(res) => {
      let toast = await this.toast.create({
        message: 'Dog deleted',
        duration: 2500
      });
      toast.present();      
    })
  }

}

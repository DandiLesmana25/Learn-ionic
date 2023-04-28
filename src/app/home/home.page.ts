
import { Component } from '@angular/core';
import { ApiServiceService } from '../api/apiserver.service';
// ApiServiceService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users : any;

  constructor(
    private api : ApiServiceService
  ) {}

  ngOnInit(){
    this.GetDataUserDiReqres();
  }

  GetDataUserDiReqres(){
    this.users = this.api.getUser().subscribe( (res:any) =>{
      this.users = res['data'];
      console.log('Data User ===>'+JSON.stringify( res['data']));
    });
  }

}
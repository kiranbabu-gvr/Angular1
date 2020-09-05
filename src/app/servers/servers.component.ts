import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isServerEnabled=false;
  serverCreationStatus='No server was created';
  serverName='';
  constructor() {
    setTimeout(()=>{
      this.isServerEnabled=true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreationStatus= 'Server was created!';
  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}

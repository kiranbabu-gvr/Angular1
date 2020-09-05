import {Component} from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: ['p{padding:20px}']
 })

export class ServerComponent{
  serverId=10;
  serverStatus:String='Offline';

  getServerStatus(){
      return this.serverStatus;
  }
}
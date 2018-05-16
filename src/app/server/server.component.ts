import { Component } from '@angular/core';
/*decorator */
@Component( {
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string ='offline';

    getServeStatus() {
        return this.serverStatus;
    }
}
import { Component, OnInit } from '@angular/core'
import * as Connectivity from '@nativescript/core/connectivity';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  connectionType:any;
  
  ngOnInit(): void {
    this.connectionType = this.getConnectionString(Connectivity.getConnectionType());
    console.log("\n\nI am here" + this.connectionType);
    
    setTimeout(() => {
      this.resetConnection()
    }, 10000);
  }

  resetConnection() {
    this.connectionType = ""
  }

  getConnectionString(type) {
    switch(type) {
      case Connectivity.connectionType.none:
        return 'No connection';

      case Connectivity.connectionType.wifi:
        return 'Connected to wifi';

      case Connectivity.connectionType.mobile:
        return 'Connected to mobile data';

      default:
        return "Unknown status";
    }
  }

}

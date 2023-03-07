import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //we need these here bcuz replict these sevrer elemnts to create the service we outout here 
  //and in the cockpit component
  serverElements = [{type:'blueprint', name:'test sevrer', content:'testing...'}];
  //we can move these

  
  onServerAdded(EventServerData: {serveName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: EventServerData.serveName,
      content: EventServerData.serverContent
    });
  }

  onBlueprintAdded(EventblueprintData: {serveName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: EventblueprintData.serveName,
      content: EventblueprintData.serverContent
    });
  }


}

import { Component } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() { }
  
  async triggerHaptics() {
    await Haptics.impact({ style: ImpactStyle.Light });

    await Haptics.impact({ style: ImpactStyle.Medium });

    await Haptics.impact({ style: ImpactStyle.Heavy });

  }

  async triggerVibration() {
    await Haptics.vibrate();
  }

  async triggerSelection() {
    await Haptics.selectionStart();
    
    await Haptics.selectionChanged();

    await Haptics.selectionEnd();
  }
}

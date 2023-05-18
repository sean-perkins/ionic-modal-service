import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Injectable()
export class ModalService {

  constructor(private modalCtrl: ModalController) { }

  async open(component: any, componentProps?: any) {
    const modal = await this.modalCtrl.create({
      component,
      componentProps
    });
    return modal.present();
  }

  async close() {
    return this.modalCtrl.dismiss();
  }

  async closeAll() {
    const top = await this.modalCtrl.getTop();
    if (top !== undefined) {
      await this.modalCtrl.dismiss();
      await this.closeAll();
    }
  }

}

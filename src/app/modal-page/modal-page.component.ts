import { Component } from "@angular/core";
import { ModalService } from "../modal.service";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  standalone: true,
  imports: [IonicModule],
  providers: [ModalService]
})
export class ModalPage {

  constructor(private modalService: ModalService) { }

  open() {
    this.modalService.open(ModalPage);
  }

  close() {
    this.modalService.close();
  }

  closeAll() {
    this.modalService.closeAll();
  }
}

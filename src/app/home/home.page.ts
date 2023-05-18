import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { ModalPage } from '../modal-page/modal-page.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.open(ModalPage);
  }
}

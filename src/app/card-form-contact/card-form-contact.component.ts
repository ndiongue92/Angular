import { Component, OnInit, Output } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-form-contact',
  templateUrl: './card-form-contact.component.html',
  styleUrls: ['./card-form-contact.component.scss']
})
export class CardFormContactComponent implements OnInit {
  @Output() refreshDatas = new EventEmitter();

  constructor(private service: ContactService) {}

  ngOnInit() {}

  addContact(nom: string, prenom: string, numero: string) {
    this.service.createContact(nom, prenom, numero).subscribe(
      result => {
        this.refreshDatas.emit();
      },
      error => {},
      () => {}
    );
  }
}

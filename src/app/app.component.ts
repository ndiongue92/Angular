import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listeContact: Contact[];

  constructor(private service: ContactService) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.service.getListContact().subscribe(items => {
      this.listeContact = items;
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  pages = [
    {
      title: 'Mensagens',
      url: '/tabs/tab1',
      icon: 'mail',
    },
    {
      title: 'Contatos',
      url: '/tabs/tab2',
      icon: 'person',
    },
    {
      title: 'Sobre',
      url: '/tabs/tab3',
      icon: 'information-circle',
    },
  ];
}

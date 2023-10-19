import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
    <div>
      <h2>Досвід роботи</h2>
      <ul>
        <li>
          <h3>Компанія TEST</h3>
          <p>Посада: Програміст</p>
          <p>Рік: 2010-2015</p>
          <p>Опис роботи: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
        <li>
          <h3>Компанія B</h3>
          <p>Посада: Аналітик</p>
          <p>Рік: 2015-2020</p>
          <p>Опис роботи: Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        </li>
      </ul>
    </div>
  `,
})
export class ExperienceComponent { }

import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise-app';

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Doctor Jammy', date: '2021-11-02T02:30:00' },
      { title: 'Doctor Richard', date: '2021-11-02T10:30:00' }
    ]
  };
  handleDateClick() {

  }
}

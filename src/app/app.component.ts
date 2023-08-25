import { leadingComment } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
  ) { }

  ngOnInit(): void {
    // this.gotoTop();
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let header = document.querySelector(".header") as HTMLElement;
    // smooth
    window.onscroll = () => {
      header.classList.toggle("sticky", window.screenY > 100);
    };


    //active
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active');
          })
        }
      })
    }
  }

  toggleDarkMode() {
    const darkModeIcon = document.querySelector('#darkMode-icon');
    darkModeIcon?.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  }

  // gotoTop(){
  //   window.scroll({
  //     top:0,
  //     left:0,
  //     behavior: 'smooth',
  //   })
  // }
}

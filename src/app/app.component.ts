import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = [];
  img = [];
  des = [];
  url = [];
  github = [];

  projects = [
    {
      title: 'Safety Net',
      img: 'assets/safetynet1.png',
      url: 'https://asafetynet.herokuapp.com/',
      github: 'https://github.com/derrickbray/Safety-Net',
      description: 'The Safety Net is an app that helps people in need connect with those who are willing to help. It was build using EmberJS and NodeJS with Shaun Willis. The free server takes a min to load.'
    },
    {
      title: 'Bamboo Solutions Documentation',
      img: 'assets/docs.png',
      url: 'https://docs.bamboosolutions.com/',
      description: 'This is a site with over 2,000 pages and 6,000 images that I migrated. It was hosted with a custom CMS and was moved to WordPress Engine.'
    },
    {
      title: 'Mythos',
      img: 'assets/mythos.png',
      url: 'https://mythos-universes.herokuapp.com/',
      github: 'https://github.com/derrickbray/mythos-universes',
      description: 'Mythos is an app that allows you to read, update, edit and delete a pantheon of mythological gods and heros. It was built in using Ruby on Rails and custom styling. The free server takes a min to load.'
    },
    {
      title: 'Marvel Site',
      img: 'assets/marvel.jpeg',
      url: 'http://military-advertisement.surge.sh/',
      github: 'https://github.com/derrickbray/15-marvel',
      description: 'Using the Marvel API, I created an app that shows relevant charactors and comics for a specific series. It was built with VueJs.'
    },
    {
      title: 'Nasa Picture of the Day',
      img: 'assets/nasa1.png',
      url: 'http://nasa-stuff.surge.sh/',
      github: 'https://github.com/derrickbray/notes/tree/nasa',
      description: 'This site uses the Nasa API to display the picture of the day. You can cycle through the days to find your favorite picture. It was built with VueJS.'
    },
    {
      title: 'Admin Menu Maker',
      img: 'assets/menu.png',
      url: 'http://determined-prison.surge.sh/',
      github: 'https://github.com/derrickbray/emberial-thai',
      description: 'Menu Maker was made in EmberJs with custom style. In the admin side you can create/read/update/destroy new menu items. The free server takes a min to load.'
    },
    {
      title: 'Twitch Clone',
      img: 'assets/twitch.png',
      url: 'http://parallel-leather.surge.sh/',
      github: 'https://github.com/derrickbray/10-twitch',
      description: 'This is a Twitch clone. I used plain JavaScript for the grid. It resizes with like the site to a small sidebar with the grid using CSS only.'
    },
    {
      title: 'Monster Maker',
      img: 'assets/monster1.png',
      url: 'http://brave-heart.surge.sh/',
      github: 'https://github.com/derrickbray/top-10',
      description: 'Monster Maker creates a new monster when you cycle through the different body parts. You can then name and save your creation. It was built with VueJS.'
    },
    {
      title: 'Podcast Courses',
      img: 'assets/knowthis1.png',
      url: 'http://knowthis.website/',
      github: 'https://github.com/derrickbray/top-10',
      description: 'This is a site that I made to make podcast playlists. It also includes info on interesting people and ideas. Be gentle, it is a work in progress.'
    },
  ];

  runModal(title, img, des, url, github) {
    console.log(title, img, des, url, github);
    this.title = title;
    this.img = img;
    this.des = des;
    this.url = url;
    this.github = github;

    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal-card').style.display = 'block';
  };

  removeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('modal-card').style.display = 'none';
  };
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  movies: any;
  value = JSON.parse(localStorage.getItem('userDetails') || '{}');
  selectedMovie: any;

  userEmail = this.value.email;
  constructor(private x: MovieApiService, private route: Router) {
    console.log('IN Constr');
    this.getAllBlogs();
  }

  getAllBlogs = () => {
    this.x.getMovies().subscribe((data) => {
      console.log(data);
      this.movies = data;
    });
  };


  BookTicket = (movieInfo: any, tickets: any) => {
    console.log(movieInfo, tickets);
    const movieDetails = {
      MovieId: movieInfo.id,
      name: movieInfo.name,
      Totalprice: parseInt(movieInfo.price) * parseInt(tickets),
    };
    this.x.bookMovie(movieDetails).subscribe((data) => {
      console.log(data);
      alert(
        'Booking Successfull , Dated :- ' +
          new Date().toUTCString().slice(5, 16) +
          'Total Price :-  ' +
          parseInt(movieInfo.price) * parseInt(tickets)
      );
    });
  };

  cancelTicket = (movieName: any) => {
    console.log(movieName)
    this.x.cancelBooking(movieName).subscribe((data:any)=>{
      console.log(data.refundAmount)
      alert('Your Refund Credited :- '+data.refundAmount)
    })
  };

  selectMovie = (item: any) => {
    this.selectedMovie = item;
  };
}

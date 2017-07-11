import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})

export class MarketplaceComponent implements OnInit {

  constructor(private router: Router, private albumService: AlbumService){}

//the array is now in mock-album.ts
  albums: Album[];

  goToDetailPage(clickedAlbum: Album) {
  this.router.navigate(['album-detail', clickedAlbum.id]);
  };


  ngOnInit(){
    this.albums = this.albumService.getAlbums();
 }

}

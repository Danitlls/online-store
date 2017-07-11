import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

//.list returns the list of objects
constructor(private database: AngularFireDatabase) {
  this.albums = database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

//firebase keys are strings.. .object returns One object at the time
  getAlbumById(albumId: string){
     return this.database.object('albums/' + albumId);
    // for (var i = 0; i <= ALBUMS.length - 1; i++) {
    //   if (ALBUMS[i].id === albumId) {
    //     return ALBUMS[i];
    //   }
    // }
  }

  updateAlbum(localUpdatedAlbum){
    var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
    albumEntryInFirebase.update({title: localUpdatedAlbum.title,
                                artist: localUpdatedAlbum.artist,
                                description: localUpdatedAlbum.description});
  }

  deleteAlbum(localAlbumToDelete){
    // var albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
    // albumEntryInFirebase.remove();

    this.getAlbumById(localAlbumToDelete.$key).remove();
  }

}

import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  newAlbum!: Album;
  loaded: boolean = false;

  constructor(private albumService: AlbumService) {
    this.newAlbum = {
      userId: 1,
      id: 101,
      title: ''
    }
  }

  ngOnInit(): void {
    this.getAlbums();
  }
  addAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe(() => {
      this.albums.push(this.newAlbum);
      alert('Album created!')
      this.newAlbum = {} as Album;
    })
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((a) => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      alert('Album deleted!')
    })
  }
}

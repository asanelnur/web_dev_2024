import { Component, OnInit } from '@angular/core';
import { Album, AlbumPhoto } from '../models';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumsPhotosComponent implements OnInit {
  album!: Album;
  photos: AlbumPhoto[] = [];
  loaded: boolean | undefined;

  constructor(
    private albumsService: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAlbumPhotos();
  }

  getAlbumPhotos() {
    this.route.paramMap.subscribe((params) => {
      const albumIdFromRoute = Number(params.get('albumId'));
      this.loaded = false;

      this.albumsService.getAlbum(albumIdFromRoute).subscribe((album) => {
        this.album = album;

        this.albumsService.getAlbumPhotos(this.album.id).subscribe((photos) => {
          this.photos = photos;
          this.loaded = true;
        });
      });
    });
  }
}

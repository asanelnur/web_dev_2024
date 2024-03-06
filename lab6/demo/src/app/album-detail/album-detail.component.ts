import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album!: Album;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
    private albumService: AlbumService) {
  }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.loaded = false;
      this.albumService.getAlbum(albumId).subscribe((album) => {
      this.album = album;
      this.loaded = true;
      });
    });
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      console.log('Update');

    })
  }
}

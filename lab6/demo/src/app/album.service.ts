import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, AlbumPhoto } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  createAlbum(newAlbum: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, newAlbum);
  }

  deleteAlbum(id: number) {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`)
  }

  updateAlbum(album: Album) {
    return this.client.put(`${this.BASE_URL}/albums/${album.id}`, album)
  }

  getAlbumPhotos(id: number): Observable<AlbumPhoto[]> {
    return this.client.get<AlbumPhoto[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
}

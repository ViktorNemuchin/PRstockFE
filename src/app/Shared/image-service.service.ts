import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: HttpClient) { }
  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image, image.name);
    return this.http.post('http://voz.dsr-corporation.com:58281/api/PrProduct/UploadData', formData);
  }
}

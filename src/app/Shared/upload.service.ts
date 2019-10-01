import { ImageServiceService } from './image-service.service';
import { ImageSnippet } from './image-snippet';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public selectedFile: ImageSnippet;

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

   private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }
  constructor(private imageService: ImageServiceService) { }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        });
    });
    reader.readAsDataURL(file);
  }
}

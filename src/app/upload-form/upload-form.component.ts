import { ImageServiceService } from './../Shared/image-service.service';
import { Component, OnInit } from '@angular/core';


class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  selectedFile: ImageSnippet;

  constructor(private imageService: ImageServiceService) { }
    private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

   private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

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
  ngOnInit() {
  }

}

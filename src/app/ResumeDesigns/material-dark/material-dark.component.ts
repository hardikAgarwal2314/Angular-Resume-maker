import {Component, Input, OnInit} from '@angular/core';
import {DateUtils, User} from '../../Models';
import * as JSPDF from 'jspdf';
import * as domtoimage from 'dom-to-image';

@Component({
  selector: 'app-material-dark',
  templateUrl: './material-dark.component.html',
  styleUrls: ['./material-dark.component.scss']
})
export class MaterialDarkComponent implements OnInit {

  @Input() user: User;
  dateUtils = DateUtils;

  constructor() { }

  ngOnInit() {
    // localStorage.setItem('user', JSON.stringify(this.user));
    // const user = localStorage.getItem('user');
  }

  exportAsPDF() {
    const node = document.getElementById('MyDIv');

    let img;
    let filename;
    let newImage;


    domtoimage.toPng(node)

      .then(function (dataUrl) {

        img = new Image();
        img.src = dataUrl;
        newImage = img.src;

        img.onload = function () {
          let doc;
          doc = new JSPDF('p', 'mm', 'a4');
          const width = doc.internal.pageSize.getWidth();
          const height = doc.internal.pageSize.getHeight();


          doc.addImage(newImage, 'PNG', 0, 0, width, height);
          filename = 'mypdf_' + '.pdf';
          doc.save(filename);

        };


      })
      .catch(function (error) {
        console.log(error);
      });


  }

}

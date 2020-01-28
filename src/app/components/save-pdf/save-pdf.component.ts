import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-save-pdf',
  templateUrl: './save-pdf.component.html',
  styleUrls: ['./save-pdf.component.scss']
})
export class SavePDFComponent implements OnInit {

  constructor() { }

  saveAsPdf(){
    let doc = new jsPDF()
    doc.text('Hello world')
    doc.save('hello.pdf')
  }

  ngOnInit() {
  }

}

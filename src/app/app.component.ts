import { Component, OnInit } from '@angular/core';


// Algoritmos
import { mergeSort } from './algoritmos/mergeSort';
import { quickSort } from './algoritmos/quickSort';
import { selectionSort } from './algoritmos/selectionSort';
import { insertionSort } from './algoritmos/insertionSort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'comparacoes';

  constructor() { }

  ngOnInit(): void {
    const vetor = [7, 34, 5, 64, 35, 9, 3, 8];

    // selectionSort(vetor);

    // insertionSort(vetor);

    // mergeSort(vetor, 0, vetor.length - 1);

    // quickSort(vetor,0, vetor.length-1);

    // console.log(vetor);


  }
}

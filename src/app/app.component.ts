import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// Algoritmos
import { selectionSort, clearSelection, SelectionnKey, SelectionnTroc } from './algoritmos/selectionSort';
import { insertionSort, clearInsertion, InsertionnKey, InsertionnTroc } from './algoritmos/insertionSort';
import { bubbleSort, BubblenKey, BubblenTroc, clearBubble } from './algoritmos/bubbleSort';
import { shellSort, clearShell, ShellnKey, ShellnTroc } from './algoritmos/shellSort';
import { mergeSort, clearMerge, mergenKey, mergenTroc } from './algoritmos/mergeSort';
import { quickSort, QuicknKey, QuicknTroc, clearQuick } from './algoritmos/quickSort';

import { UtilsService } from './providers/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public form: FormGroup;

  public sorts = {
    selection: false,
    insertion: false,
    bubble: false,
    shell: false,
    merge: false,
    quick: false,
    tim: false,
  };

  public arrayType = {
    big: false,
    small: false,
  }

  public compType = {
    key: false,
    numberChange: false,
  }

  public startedComp = false;

  // Chart variables.
  public labels = [];
  public chartData = [];
  public colors = [];

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService,
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      array: [''],
    });
  }


  selectSort(sort) {
    this.sorts[sort] = !this.sorts[sort];
    console.log(this.sorts);
  }


  genereteArray(type: string) {
    this.arrayType[type] = !this.arrayType[type];
  }


  choiseComp(comp) {
    this.compType[comp] = !this.compType[comp];
  }


  startComp(arrayType, compType, sorts) {
    console.log(arrayType, compType, sorts, this.form);

    // Variavaies
    const userVet = this.form.get('array').value;

    // vetor do usuario
    const vetNumber = (userVet !== '') ? userVet.split(",").map(x => parseInt(x)) : null;
    // vetor grande
    const big = (arrayType.big) ? this.utils.createArray(50000) : null;
    // vetor pequeno
    const small = (arrayType.small) ? this.utils.createArray(100) : null;

    // pega qual o vetor utilizado pelo usuário
    const array: number[] = (vetNumber) ? vetNumber : big ? big : small;

    // data to chart
    const chartDataUser = [];
    const chartDataBig = [];
    const chartDataSmall = [];
    const chartData = [];

    // Call sort methodos.

    // ============  SELECTION SORT  ============
    if (sorts.selection) {

      if (big) {
        const original = Object.assign([], big);
        selectionSort(original);
        chartDataBig.push((compType.key) ? SelectionnKey : SelectionnTroc)
        clearSelection();
      }
      if (small) {
        const original = Object.assign([], small);
        selectionSort(original);
        chartDataSmall.push((compType.key) ? SelectionnKey : SelectionnTroc)
        clearSelection();
      }
      if (vetNumber) {
        const original = Object.assign([], vetNumber);
        selectionSort(original);
        chartDataUser.push((compType.key) ? SelectionnKey : SelectionnTroc)
        clearSelection();
      }

      this.labels.push('Selection');
    }
    // ============  INSERTION SORT  ============
    if (sorts.insertion) {

      if (big) {
        const original = Object.assign([], big);
        insertionSort(original);
        chartDataBig.push((compType.key) ? InsertionnKey : InsertionnTroc)
        clearInsertion();
      }
      if (small) {
        const original = Object.assign([], small);
        insertionSort(original);
        chartDataSmall.push((compType.key) ? InsertionnKey : InsertionnTroc)
        clearInsertion();
      }
      if (vetNumber) {
        const original = Object.assign([], vetNumber);
        insertionSort(original);
        chartDataUser.push((compType.key) ? InsertionnKey : InsertionnTroc)
        clearInsertion();
      }

      this.labels.push('Insertion');
    }
    // ============  BUBBLE SORT  ============
    if (sorts.bubble) {

      if (big) {
        const original = Object.assign([], big);
        bubbleSort(original);
        chartDataBig.push((compType.key) ? BubblenKey : BubblenTroc)
        clearBubble();
      }
      if (small) {
        const original = Object.assign([], small);
        bubbleSort(original);
        chartDataSmall.push((compType.key) ? BubblenKey : BubblenTroc)
        clearBubble();
      }
      if (vetNumber) {
        const original = Object.assign([], vetNumber);
        bubbleSort(original);
        chartDataUser.push((compType.key) ? BubblenKey : BubblenTroc)
        clearBubble();
      }

      this.labels.push('Bubble');

    }
    // ============  SHELL SORT  ============
    if (sorts.shell) {

      if (big) {
        const original = Object.assign([], big);
        shellSort(original);
        chartDataBig.push((compType.key) ? ShellnKey : ShellnTroc)
        clearShell();
      }
      if (small) {
        const original = Object.assign([], small);
        shellSort(original);
        chartDataSmall.push((compType.key) ? ShellnKey : ShellnTroc)
        clearShell();
      }
      if (vetNumber) {
        const original = Object.assign([], vetNumber);
        shellSort(original);
        chartDataUser.push((compType.key) ? ShellnKey : ShellnTroc)
        clearShell();
      }
      this.labels.push('Shell');
    }
    // ============  MERGE SORT  ============
    if (sorts.merge) {
      if (big) {
        const original = Object.assign([], big);
        mergeSort(original, 0, original.length - 1);
        chartDataBig.push((compType.key) ? mergenKey : mergenTroc)
        clearMerge();
      }
      if (small) {
        const original = Object.assign([], small);
        mergeSort(original, 0, original.length - 1);
        chartDataSmall.push((compType.key) ? mergenKey : mergenTroc)
        clearMerge();
      }
      if (vetNumber) {
        const original = Object.assign([], vetNumber);
        mergeSort(original, 0, original.length - 1);
        chartDataUser.push((compType.key) ? mergenKey : mergenTroc)
        clearMerge();
      }
      this.labels.push('Merge');
    }
    // ============  QUICK SORT  ============
    if (sorts.quick) {

      if (big) {
        const original = Object.assign([], big);
        quickSort(original, 0, original.length - 1);
        chartDataBig.push((compType.key) ? QuicknKey : QuicknTroc)
        clearQuick();
      }
      if (small) {
        const original = Object.assign([], small);
        quickSort(original, 0, original.length - 1);
        chartDataSmall.push((compType.key) ? QuicknKey : QuicknTroc)
        clearQuick();
      }
      if (vetNumber) {
        const original = Object.assign([], vetNumber);
        quickSort(original, 0, original.length - 1);
        chartDataUser.push((compType.key) ? QuicknKey : QuicknTroc)
        clearQuick();
      }
      this.labels.push('Quick');
    }
    if (sorts.tim) {

      console.log(array);
      // console.log(original);
      this.labels.push('Tim');
    }

    // Create Chart Data.
    this.setDataChart(vetNumber, big, small, chartDataBig, 'big');
    this.setDataChart(vetNumber, big, small, chartDataSmall, 'small');
    this.setDataChart(vetNumber, big, small, chartDataUser, 'user');

  }

  /**
   * Set data from charts.
   * @param vetNumber user array
   * @param big big array
   * @param small small array
   * @param chartData chartData with number of comp or changesKeys
   */
  setDataChart(vetNumber, big, small, chartData, type: string) {
    // Get array user data.
    if (vetNumber && type === 'user') {
      this.chartData.push({
        label: 'Vetorio usuário',
        data: chartData
      });
      this.colors.push({ backgroundColor: '#f1c40f' });
    } else if (big && type === 'big') {
      this.chartData.push({
        label: 'Vetorio Grande',
        data: chartData
      })
      this.colors.push({ backgroundColor: '#e74c3c' });
    } else if (small && type === 'small') {
      this.chartData.push({
        label: 'Vetorio Pequeno',
        data: chartData
      })
      this.colors.push({ backgroundColor: '#55acee' });
    }

  }

  /**
   * Clear all data.
   */
  resetAll() {
    this.sorts = {
      selection: false,
      insertion: false,
      bubble: false,
      shell: false,
      merge: false,
      quick: false,
      tim: false,
    };

    this.arrayType = {
      big: false,
      small: false,
    }

    this.compType = {
      key: false,
      numberChange: false,
    }

    this.form.get('array').setValue('');

    this.labels = [];
    this.chartData = [];
    this.colors = [];

    // clear sort counts
    clearBubble();
    clearInsertion();
    clearMerge();
    clearQuick();
    clearSelection();
    clearShell();

  }
}

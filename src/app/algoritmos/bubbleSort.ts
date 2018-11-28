export let BubblenKey = 0, BubblenTroc = 0;

/**
 * Bubble Sort
 * @param vetor 
 */
export function bubbleSort(vetor: number[]) {

  let i, j, aux = 0;
  for (i = 0; i < vetor.length; i++) {
    for (j = vetor.length; j >= i + 1; j--) {
      BubblenKey++;
      if (vetor[j] < vetor[j - 1]) {
        BubblenTroc++;
        aux = vetor[j];
        vetor[j] = vetor[j - 1];
        vetor[j - 1] = aux;
      }
    }
  }
}

export function clearBubble() {
  BubblenKey = 0;
  BubblenTroc = 0;
}
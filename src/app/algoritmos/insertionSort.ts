export let InsertionnKey = 0, InsertionnTroc = 0;

/**
 * InsertionSort
 * @param vetor array to be sort.
 */
export function insertionSort(vetor: number[]) {
  for (let j = 1; j < vetor.length; j++) {

    const chave = vetor[j];
    let i = j - 1
    InsertionnKey++;

    while (i >= 0 && vetor[i] > chave) {
      InsertionnTroc++;
      vetor[i + 1] = vetor[i];
      i = i - 1;
    }
    InsertionnTroc++;
    vetor[i + 1] = chave;
  }
};

export function clearInsertion() {
  InsertionnKey = 0;
  InsertionnTroc = 0;
}
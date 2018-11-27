/**
 * InsertionSort
 * @param vetor array to be sort.
 */
export function insertionSort(vetor: number[]) {
  for (let j = 1; j < vetor.length; j++) {

    const chave = vetor[j];
    let i = j - 1

    while (i >= 0 && vetor[i] > chave) {
      vetor[i + 1] = vetor[i];
      i = i - 1;
    }
    vetor[i + 1] = chave;
  }
};
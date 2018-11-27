/**
 * Selection sort.
 * @param vetor array to be sort.
 */
export function selectionSort(vetor: number[]) {
  // temp to do changes.
  let temp;

  for (let i = 0; i < vetor.length; i++) {
    let menor = i;

    for (var j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[menor])
        menor = j;
    }

    temp = vetor[i];
    vetor[i] = vetor[menor];
    vetor[menor] = temp;
  }
};
export let SelectionnKey = 0, SelectionnTroc = 0;

/**
 * Selection sort.
 * @param vetor array to be sort.
 */
export function selectionSort(vetor: number[]) {
  // temp to do changes.
  let temp;

  for (let i = 0; i < vetor.length; i++) {
    let menor = i;

    for (let j = i + 1; j < vetor.length; j++) {
      SelectionnKey++;
      if (vetor[j] < vetor[menor])
        menor = j;
    }
    SelectionnTroc++;
    temp = vetor[i];
    vetor[i] = vetor[menor];
    vetor[menor] = temp;
  }
};

export function clearSelection() {
  SelectionnKey = 0;
  SelectionnTroc = 0;
}
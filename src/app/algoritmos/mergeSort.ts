/**
 * MergeSort algoritm
 * @param vetor array to be sort
 * @param inicio start index,
 * @param fim end index
 */
export function mergeSort(vetor: number[], inicio: any, fim: any) {
  // get int value
  inicio = parseInt(inicio);

  // get int value
  fim = parseInt(fim);

  if (inicio < fim) {
    let meio: any = (inicio + fim) / 2;
    // get just int value.
    meio = parseInt(meio);

    mergeSort(vetor, inicio, meio);
    mergeSort(vetor, meio + 1, fim);
    merge(vetor, inicio, meio, fim);
  }
};



function merge(vetor: number[], inicio: any, meio: any, fim: any) {

  /**
   * Create n1 and n2
   */
  const n1 = meio;
  const n2 = fim - meio;

  /**
   * Create left and right arrays.
   */
  const left = [];
  const right = [];
  let c = inicio, d, e;

  /**
   * set left values
   */
  for (let i = 0; c <= n1; i++ , c++) {
    left[i] = vetor[c];
  }

  /**
   * set right values
   */
  for (let i = 0; c <= fim; i++ , c++) {
    right[i] = vetor[c];
  }

  for (e = d = 0; d < left.length && e < right.length;) {
    if (left[d] < right[e]) {
      vetor[inicio] = left[d];
      d++;
    } else {
      vetor[inicio] = right[e];
      e++;
    }
    inicio++;
  }
  for (; d < left.length;) {
    vetor[inicio] = left[d];
    d++;
    inicio++;
  }
  for (; e < right.length;) {
    vetor[inicio] = right[e];
    e++;
    inicio++;
  }

} 
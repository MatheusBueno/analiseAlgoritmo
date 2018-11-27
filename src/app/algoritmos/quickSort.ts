export function quickSort(vetor: number[], inicio: any, fim: any) {
  inicio = parseInt(inicio);
  fim = parseInt(fim);
  if (inicio < fim) {
    const meio = partition(vetor, inicio, fim);

    quickSort(vetor, inicio, meio - 1);
    quickSort(vetor, meio + 1, fim);
  }
};

function partition(vetor, inicio, fim): number {
  const pivo = vetor[inicio];

  let i = inicio, j = fim + 1, t;
  while (i <= j) {
    do {
      ++i;
    } while (vetor[i] < pivo && i <= fim);
    do {
      --j;
    } while (vetor[j] > pivo);

    t = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = t;
  }
  t = vetor[inicio];
  vetor[inicio] = vetor[j];
  vetor[j] = t;
  return j;
};
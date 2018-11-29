export let QuicknKey = 0, QuicknTroc = 0;

export function quickSort(vetor: number[], inicio: any, fim: any) {
  inicio = parseInt(inicio);
  fim = parseInt(fim);
  if (inicio >= fim) {
    return;
  } else {
    const meio = partition(vetor, inicio, fim);
    quickSort(vetor, inicio, meio - 1);
    quickSort(vetor, meio + 1, fim);
  }
};

function partition(vetor, inicio, fim): number {
  let q = inicio, aux;

  for (let i = inicio; i < fim; i++) {
    ++QuicknKey;
    if (vetor[i] <= vetor[fim]) {
      QuicknTroc++;
      aux = vetor[q];
      vetor[q] = vetor[i];
      vetor[i] = aux;
      q++;
    }
  }
  QuicknTroc++;
  aux = vetor[q];
  vetor[q] = vetor[fim];
  vetor[fim] = aux;
  return q;
};

export function clearQuick() {
  QuicknKey = 0;
  QuicknTroc = 0;
}
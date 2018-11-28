export let ShellnKey = 0, ShellnTroc = 0;

/**
 * ShellSort
 * @param vetor 
 */
export function shellSort(vetor: number[]) {
  let i, j, h = 0, chave;
  let c = 0, c1 = 0;
  do {
    h = 3 * h + 1;
  } while (h < vetor.length);
  do {
    h = h / 3;
    for (i = h; i < vetor.length; i++) {
      chave = vetor[i];
      j = i;
      while (++c && ++ShellnKey && j >= h && vetor[j - h] > chave) {
        ShellnTroc++;
        c1++;
        vetor[j] = vetor[j - h];
        j -= h;
      }
      ShellnTroc++;
      c1++;
      vetor[j] = chave;
    }
  } while (h != 1);
}

export function clearShell() {
  ShellnKey = 0;
  ShellnTroc = 0;
}
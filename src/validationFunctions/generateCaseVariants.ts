export default function generateCaseVariants(word: string): string[] {
  const variants: string[] = [];
  const n = word.length;
  const total = 1 << n;

  for (let i = 0; i < total; i++) {
    let variant = "";
    for (let j = 0; j < n; j++) {
      const char =
        (i & (1 << j)) !== 0 ? word[j].toUpperCase() : word[j].toLowerCase();
      variant += char;
    }
    variants.push(variant);
  }

  return variants;
}

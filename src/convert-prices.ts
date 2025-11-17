
export function convertPrices(thbRate: number): void {
  const walker: TreeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null
  );

  let node: Node | null;

  while (node = walker.nextNode()) {
    const text = node.nodeValue;

    if (text && text.includes("JPY") && !text.includes("THB")) {
      const regex = /([\d,]+)\s*JPY/g;

      if (regex.test(text)) {
        const newText = text.replace(regex, (match: string, priceString: string) => {
          const priceJPY = parseFloat(priceString.replace(/,/g, ''));
          const priceTHB = Math.ceil(priceJPY * thbRate);
          return `${match} (≈${priceTHB.toLocaleString()} THB)`;
        });

        node.nodeValue = newText;
        node.textContent = newText;
      }
    }
  }
}

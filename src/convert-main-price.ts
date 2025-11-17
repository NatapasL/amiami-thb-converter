
export function convertMainPrice(thbRate: number): void {
  const priceElements = document.querySelectorAll('.item-detail__price_selling-price');

  for (const element of priceElements) {
    if (element.querySelector('.thb-converted')) return;

    const fullText = element.textContent?.trim();

    if (fullText) {
      const match = fullText.match(/([\d,]+)/);

      if (match) {
        const priceJPY = parseFloat(match[1].replace(/,/g, ''));
        const priceTHB = Math.ceil(priceJPY * thbRate);

        const thbSpan = document.createElement('span');
        thbSpan.textContent = ` (≈${priceTHB.toLocaleString()} THB)`;
        thbSpan.className = "thb-converted";

        thbSpan.style.fontSize = "0.6em";
        thbSpan.style.color = "#666";
        thbSpan.style.marginLeft = "8px";
        thbSpan.style.fontWeight = "normal";
        thbSpan.style.verticalAlign = "middle";

        element.appendChild(thbSpan);
      }
    }
  }
}

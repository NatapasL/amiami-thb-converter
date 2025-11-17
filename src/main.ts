import { addJanLink } from "./add-jan-link";
import { convertMainPrice } from "./convert-main-price";
import { convertPrices } from "./convert-prices";
import { getThbRate } from "./get-thb-rate";

async function main(): Promise<void> {
  const thbRate = await getThbRate();

  convertPrices(thbRate);
  convertMainPrice(thbRate);
  addJanLink();
}

main();

let timeout: Timer | null = null;
const observer = new MutationObserver(() => {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    main();
  }, 500);
});

observer.observe(document.body, { childList: true, subtree: true });

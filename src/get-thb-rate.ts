const THB_RATE: number = 0.22;
const CACHE_KEY = 'amiami_thb_rate';
const CACHE_TIME_KEY = 'amiami_thb_rate_time';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const THB_RATE_API_URL: string = 'https://api.frankfurter.app/latest?from=JPY&to=THB';

export async function getThbRate(): Promise<number> {
  try {
    const cachedRate = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
    const now = Date.now();

    if (cachedRate && cachedTime && (now - parseInt(cachedTime) < ONE_DAY_MS)) {
      const thbRate = parseFloat(cachedRate);
      console.log(`[AmiAmi Converter] Using cached rate: ${thbRate}`);

      return thbRate
    }

    console.log('[AmiAmi Converter] Fetching fresh rate...');
    const response = await fetch(THB_RATE_API_URL);
    const data = await response.json();

    if (data && data.rates && data.rates.THB) {
      const thbRate = data.rates.THB;

      localStorage.setItem(CACHE_KEY, thbRate.toString());
      localStorage.setItem(CACHE_TIME_KEY, now.toString());
      console.log(`[AmiAmi Converter] Updated rate: ${thbRate}`);

      return thbRate;
    }

    return THB_RATE;
  } catch (error) {
    console.error('[AmiAmi Converter] Failed to fetch rate. Using default:', error);

    return THB_RATE;
  }
}

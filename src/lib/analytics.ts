// Lightweight analytics helper. Replace internals with your analytics provider if desired.
export function trackEvent(eventName: string, payload?: Record<string, any>) {
  try {
    // If a dataLayer (GA/GTAG) exists, push an event
    const anyWin = window as any;
    if (anyWin && Array.isArray(anyWin.dataLayer)) {
      anyWin.dataLayer.push({ event: eventName, ...payload });
    } else {
      // Fallback: console log (kept minimal and private)
      console.log("analytics event:", eventName, payload || {});
    }
  } catch (e) {
    // swallow errors to avoid breaking UX
    console.warn("analytics track failed", e);
  }
}

export default trackEvent;

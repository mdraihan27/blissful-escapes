export interface ClientEnvironment {
  referrer: string;
  language: string;
  timezone: string;
  screen: string;
}

export function getClientEnvironment(): ClientEnvironment {
  return {
    referrer: document.referrer,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${window.screen.width}x${window.screen.height}`,
  };
}

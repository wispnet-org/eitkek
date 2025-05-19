const endpoints = [
  { id: 'wispnet-org', url: 'https://wispnet.org' },
  { id: 'wisp-wispnet-org', url: 'https://wisp.wispnet.org' },
  { id: 'wispnet-twingate-com', url: 'https://wispnet.twingate.com' },
  { id: 'betelchurch-org', url: 'https://betelchurch.org' },
  { id: 'betelchapel-org', url: 'https://betelchapel.org' },
  { id: 'eitkek-com', url: 'https://eitkek.com' },
  { id: 'sherlock-ink', url: 'https://sherlock.ink' }
];

async function checkStatus(endpoint) {
  const statusElement = document.getElementById(`status-${endpoint.id}`);
  try {
    await fetch(endpoint.url, { method: 'HEAD', mode: 'no-cors' });
    statusElement.innerHTML = '<span class="badge green">Online</span>';
  } catch {
    statusElement.innerHTML = '<span class="badge red">Offline</span>';
  }
}

export function updateStatuses() {
  endpoints.forEach(checkStatus);
}

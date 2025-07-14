const BASE_URL = "https://3-way-handshaking-backend-efpo.vercel.app";

export async function healthCheck() {
  const res = await fetch(`${BASE_URL}/api/health`);
  return res.json();
}

export async function getStatus() {
  const res = await fetch(`${BASE_URL}/api/status`);
  return res.json();
}

export async function getHistory() {
  const res = await fetch(`${BASE_URL}/api/history`);
  return res.json();
}

export async function resetSimulation() {
  const res = await fetch(`${BASE_URL}/api/reset`, {
    method: "POST"
  });
  return res.json();
}

export async function sendPacket(packet: any) {
  const res = await fetch(`${BASE_URL}/api/send-packet`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(packet)
  });
  return res.json();
}

export async function handshake(data: any) {
  const res = await fetch(`${BASE_URL}/api/handshake`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function runTest(testData: any) {
  const res = await fetch(`${BASE_URL}/api/run-test`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(testData)
  });
  return res.json();
}

export async function validateChecksum(data: any) {
  const res = await fetch(`${BASE_URL}/api/validate-checksum`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function generatePacket(params: any) {
  const res = await fetch(`${BASE_URL}/api/generate-packet`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  });
  return res.json();
}

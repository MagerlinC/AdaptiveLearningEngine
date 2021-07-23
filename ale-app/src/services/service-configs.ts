const headers = { "Content-Type": "application/json" };

export async function getRequest<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request, { method: "GET" });
  const body = await response.json();
  return body;
}

export async function postRequest<T>(
  request: RequestInfo,
  requestBody: object
): Promise<T> {
  const response = await fetch(request, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(requestBody),
    headers: headers,
  });
  const body = await response.json();
  return body;
}

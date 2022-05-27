export async function fetchingData(query: string, variables = {}) {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  };

  const url = "https://countries.trevorblades.com/graphql";

  const response = await fetch(url, config);

  return response;
}

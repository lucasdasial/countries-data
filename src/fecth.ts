export async function fetchingContriesByContinent(
  endpoint: string,
  query: string,
  variables: any
) {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  };

  const response = await fetch(endpoint, config);

  console.log(response);

  return response;
}

const API_URL = "http://localhost:5001";

export async function createAssignment(
  title: string,
  instructions: string
) {
  const response = await fetch(
    `${API_URL}/api/assignments`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        title,
        instructions,
      }),
    }
  );

  return response.json();
}

export async function getAssignment(
  id: string
) {
  const response = await fetch(
    `${API_URL}/api/assignments/${id}`
  );

  return response.json();
}
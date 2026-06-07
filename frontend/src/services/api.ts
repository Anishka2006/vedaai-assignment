const API_URL =
  "https://vedaai-assignment-c1ml.onrender.com";

export async function createAssignment(
  title: string,
  instructions: string
) {
  const response = await fetch(
    `${API_URL}/api/assignments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
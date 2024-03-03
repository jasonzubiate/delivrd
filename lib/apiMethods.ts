export async function fetchLabels() {
  try {
    const response = await fetch("/api/labels");

    if (response.ok) {
      const data = await response.json();
      const labels = data.labels;
      return labels;
    }
  } catch (error) {
    console.error("Failed To Fetch Labels", error);
  }
}

import supabase from "@/lib/initSupabase";

export async function GET() {
  console.log(process.env.SUPABASE_URL);
  console.log(process.env.SUPABASE_API_KEY);
  try {
    const { data: labels, error } = await supabase.from("labels").select();
    console.log(labels);

    if (error) {
      return Response.json(
        { message: "Failed to retrieve labels", error },
        { status: 400 }
      );
    }

    return Response.json(
      { labels: labels, message: "Successfully retrieved labels" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

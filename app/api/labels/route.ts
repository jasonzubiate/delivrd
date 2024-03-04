import supabase from "@/lib/initSupabase";

export async function GET() {
  try {
    const { data: labels, error } = await supabase.from("labels").select();

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

import { NextRequest, NextResponse } from "next/server";

// In a real application, you would invalidate the token in a database
// Here we just return a success response since client-side will remove the token
export async function POST(request: NextRequest) {
  try {
    // In a real app, you would invalidate the token in a database
    // For this example, we just return a success response
    // as the frontend will handle removing the tokens from storage

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

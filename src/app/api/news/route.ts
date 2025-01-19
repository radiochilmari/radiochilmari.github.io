import { NextResponse } from 'next/server';

export async function GET() {
  const aboutData = {
    name: "Next.js API Example",
    description: "This API serves information about the application.",
    version: "1.0.0",
    author: "Your Name",
  };

  return NextResponse.json(aboutData);
}

// Add dynamic export for static export
export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ message: 'Hello from Mandala Ourense!' })
}
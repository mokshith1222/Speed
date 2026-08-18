export async function GET() {
  return new Response('google-site-verification: googlefbfa23743896d7f7.html', {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

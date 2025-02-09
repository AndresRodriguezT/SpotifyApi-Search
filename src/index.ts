import { SpotifyApi, ClientCredentialsStrategy } from '@spotify/web-api-ts-sdk';

export default {
  async fetch(request: Request, env: { SPOTIFY_CLIENT_ID: string; SPOTIFY_CLIENT_SECRET: string }): Promise<Response> {
    // Initialize Spotify auth and API client
    const auth = new ClientCredentialsStrategy(
      env.SPOTIFY_CLIENT_ID,
      env.SPOTIFY_CLIENT_SECRET
    );
    const spotify = new SpotifyApi(auth);

    // Search tracks
    if (request.method === 'GET' && request.url.includes('/search')) {
      const url = new URL(request.url);
      const query = url.searchParams.get('q');
      if (!query) return new Response(JSON.stringify({ error: 'No query provided' }), { status: 400 });

      try {
        const results = await spotify.search(query, ['track']);
        return new Response(JSON.stringify(results), { status: 200 });
      } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to search tracks' }), { status: 500 });
      }
    }

    // Default response
    return new Response('Not Found', { status: 404 });
  }
};
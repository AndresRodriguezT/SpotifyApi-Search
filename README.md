# Spotify Track Search API with Cloudflare Workers

[![Deploy to Cloudflare Workers](https://img.shields.io/badge/Deploy%20to-CF%20Workers-%23F38020?logo=cloudflare)](https://dash.cloudflare.com/)

Serverless API integration with Spotify's Web API using Cloudflare Workers and Hono framework. Perfect for music-related projects and portfolio demonstrations.

## 🚀 Features

- Serverless architecture with Cloudflare Workers
- Spotify API authentication using Client Credentials flow
- Track search endpoint with query parameter
- Type-safe implementation using Spotify Web API TypeScript SDK
- Error handling and proper HTTP status codes

## 📦 Installation

1. Clone repository:
```bash
git clone https://github.com/tu-usuario/spotify-workers-api.git
``` 

2. Install dependecies: 
```bash
npm install
```

3. Configure environment variables in wrangler.json

```
[vars]
SPOTIFY_CLIENT_ID = "your_client_id"
SPOTIFY_CLIENT_SECRET = "your_client_secret"
```

## 🛠️ Usage

Run locally:
```bash
npm run dev
```

### Example request
```bash
curl "http://localhost:xxxx/search?q=Bohemian+Rhapsody&type=track"
```
The function spotify.search(query, [type]) let's you search different type of resources. For example:
- type=track
- type=album
- type=artist
You can also combine them, like type=track,album

### 🤖 Technologies Used
- Cloudflare Workers
- Hono
- Spotify Web API TypeScript SDK
- TypeScript

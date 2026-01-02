'use client';
import { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState('');
  const [ttl, setTtl] = useState('');
  const [views, setViews] = useState('');
  const [url, setUrl] = useState('');

  async function submit() {
    const res = await fetch('/api/pastes', {
      method: 'POST',
      body: JSON.stringify({
        content,
        ttl_seconds: ttl ? Number(ttl) : undefined,
        max_views: views ? Number(views) : undefined
      })
    });

    const json = await res.json();
    setUrl(json.url);
  }

  return (
    <div style={{padding:30}}>
      <h1>Pastebin Lite</h1>
      <textarea value={content} onChange={e=>setContent(e.target.value)} />
      <input placeholder="TTL seconds" onChange={e=>setTtl(e.target.value)} />
      <input placeholder="Max views" onChange={e=>setViews(e.target.value)} />
      <button onClick={submit}>Create</button>
      {url && <a href={url}>{url}</a>}
    </div>
  );
}
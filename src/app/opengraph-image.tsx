import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Vinay Kumar - Senior Software Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1e1b4b 50%, #0a0a0f 100%)',
          color: '#f1f5f9',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: '72px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '24px',
          }}
        >
          Vinay Kumar
        </div>
        <div
          style={{
            fontSize: '36px',
            fontWeight: '600',
            color: '#94a3b8',
            marginBottom: '16px',
          }}
        >
          Senior Software Developer
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#64748b',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          React.js · Next.js · TypeScript · Performance Optimization
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
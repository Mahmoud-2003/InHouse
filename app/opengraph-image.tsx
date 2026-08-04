import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'InHouse — League & Valorant';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [rajdhaniBold, jetbrainsSemiBold] = await Promise.all([
    readFile(join(process.cwd(), 'app/assets/Rajdhani-Bold.ttf')),
    readFile(join(process.cwd(), 'app/assets/JetBrainsMono-SemiBold.ttf')),
  ]);

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
          backgroundColor: '#08090C',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -180,
            left: -180,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            right: -180,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,70,85,0.28) 0%, rgba(255,70,85,0) 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF7A29', display: 'flex' }} />
          <div
            style={{
              display: 'flex',
              fontFamily: 'JetBrains Mono',
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 8,
              textTransform: 'uppercase',
              color: '#FF7A29',
            }}
          >
            Competitive Discord Community
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Rajdhani',
            fontSize: 148,
            fontWeight: 700,
            color: '#EDEFF5',
            textTransform: 'uppercase',
            letterSpacing: 2,
            lineHeight: 1,
          }}
        >
          InHouse
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Rajdhani',
            fontSize: 80,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 2,
            lineHeight: 1,
            marginTop: 8,
            backgroundImage: 'linear-gradient(90deg, #FF7A29 0%, #3B82F6 100%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          League &amp; Valorant
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Rajdhani', data: rajdhaniBold, weight: 700, style: 'normal' },
        { name: 'JetBrains Mono', data: jetbrainsSemiBold, weight: 600, style: 'normal' },
      ],
    }
  );
}

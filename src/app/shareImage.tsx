// Library
import { ImageResponse } from 'next/server';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Personal Data
import { siteData } from './data/siteData';


// The 1200x630 card a link shows when it is pasted into LinkedIn, Slack, or a text message.
// Every page's card shares this design; only the words change.
export const shareImageSize = { width: 1200, height: 630 };

type ShareImageProps = {
  eyebrow: string,
  title: string,
  subtitle: string,
  tags: string[],
  footer: string,
  withPhoto?: boolean,
};

const headshot = () => `data:image/png;base64,${readFileSync(join(process.cwd(), 'public', 'headshot.png')).toString('base64')}`;

export function shareImage({ eyebrow, title, subtitle, tags, footer, withPhoto = false }: ShareImageProps) {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', background: 'linear-gradient(135deg, #141a1f 0%, #141a1f 55%, #1b2a4a 100%)', color: '#e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: withPhoto ? 720 : 1056 }}>
            <div style={{ display: 'flex', fontSize: 26, color: '#c9a45c', letterSpacing: 4, textTransform: 'uppercase' }}>{eyebrow}</div>
            <div style={{ display: 'flex', marginTop: 18, fontSize: title.length > 26 ? 60 : 76, fontWeight: 800, lineHeight: 1.05, color: '#ffffff' }}>{title}</div>
            <div style={{ display: 'flex', marginTop: 20, fontSize: 34, color: '#93c5fd' }}>{subtitle}</div>
          </div>
          {withPhoto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={headshot()} width={260} height={260} alt='' style={{ borderRadius: 9999, border: '6px solid #c9a45c' }} />
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {tags.map((tag) => (
              <div key={tag} style={{ display: 'flex', padding: '8px 18px', borderRadius: 9999, fontSize: 24, color: '#e6d3a8', background: 'rgba(201, 164, 92, 0.14)', border: '1px solid rgba(201, 164, 92, 0.45)' }}>{tag}</div>
            ))}
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#94a3b8' }}>{footer}</div>
        </div>
      </div>
    ),
    shareImageSize,
  );
};

export const siteHost = siteData.url.replace(/^https?:\/\/(www\.)?/, '');

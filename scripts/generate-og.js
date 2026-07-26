import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateOG() {
  const width = 1200;
  const height = 630;

  const profilePicPath = path.join(__dirname, '../src/assets/Profile.png');
  const outputPath = path.join(__dirname, '../public/og-image.png');

  // Resize and make avatar circular (260x260)
  const avatarSize = 260;
  const avatarCircleSvg = Buffer.from(`
    <svg width="${avatarSize}" height="${avatarSize}">
      <circle cx="${avatarSize / 2}" cy="${avatarSize / 2}" r="${avatarSize / 2}" fill="#fff" />
    </svg>
  `);

  const processedAvatar = await sharp(profilePicPath)
    .resize(avatarSize, avatarSize, { fit: 'cover' })
    .composite([{ input: avatarCircleSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Create high-resolution SVG overlay for text and editorial design scaffold
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Ambient background gradients -->
        <radialGradient id="bgGlow1" cx="25%" cy="30%" r="55%">
          <stop offset="0%" stop-color="#4DA3FF" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#111318" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="bgGlow2" cx="80%" cy="80%" r="65%">
          <stop offset="0%" stop-color="#27187E" stop-opacity="0.45" />
          <stop offset="100%" stop-color="#111318" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F7F7FF" stop-opacity="0.03" />
          <stop offset="100%" stop-color="#F7F7FF" stop-opacity="0.01" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="#111318" />
      <rect width="${width}" height="${height}" fill="url(#bgGlow1)" />
      <rect width="${width}" height="${height}" fill="url(#bgGlow2)" />

      <!-- Editorial Frame Border -->
      <rect x="40" y="40" width="${width - 80}" height="${height - 80}" rx="16" fill="url(#cardGrad)" stroke="#F7F7FF" stroke-opacity="0.08" stroke-width="1.5" />

      <!-- Top Mono Tag -->
      <text x="90" y="125" font-family="JetBrains Mono, SF Mono, monospace" font-size="15" font-weight="500" letter-spacing="4" fill="#666D80" text-transform="uppercase">
        DEVELOPER &amp; ENGINEER // AKXH5
      </text>

      <!-- Main Name Heading -->
      <text x="90" y="215" font-family="Instrument Serif, Georgia, serif" font-size="76" font-weight="400" fill="#F7F7FF" letter-spacing="-1">
        Akshansh Sharma
      </text>

      <!-- Subtitle / Tagline -->
      <text x="90" y="280" font-family="Inter, sans-serif" font-size="24" font-weight="400" fill="#949EA9">
        Building systems, interfaces, and developer tools.
      </text>

      <text x="90" y="320" font-family="Inter, sans-serif" font-size="20" font-weight="400" fill="#666D80">
        syn8x · Oper8a · TerraLedger · Arch1v
      </text>

      <!-- Status Indicator Line -->
      <g transform="translate(90, 480)">
        <!-- Green status dot -->
        <circle cx="8" cy="8" r="6" fill="#34D399" fill-opacity="0.8" />
        <circle cx="8" cy="8" r="10" fill="#34D399" fill-opacity="0.25" />
        <text x="28" y="13" font-family="JetBrains Mono, monospace" font-size="14" font-weight="500" letter-spacing="3" fill="#A0A8B6">
          STATUS: AVAILABLE · 2026
        </text>
      </g>

      <!-- Footer branding -->
      <text x="90" y="535" font-family="JetBrains Mono, monospace" font-size="13" font-weight="400" letter-spacing="2" fill="#4B5262">
        AKXH5.ME — INDIA (UTC +5:30)
      </text>

      <!-- Avatar Glow Ring on Right -->
      <circle cx="930" cy="315" r="142" fill="none" stroke="#4DA3FF" stroke-opacity="0.25" stroke-width="2" />
      <circle cx="930" cy="315" r="148" fill="none" stroke="#F7F7FF" stroke-opacity="0.08" stroke-width="1" />
    </svg>
  `);

  // Composite SVG overlay and processed avatar
  await sharp(svgOverlay)
    .composite([
      {
        input: processedAvatar,
        top: 185,
        left: 800,
      },
    ])
    .png()
    .toFile(outputPath);

  console.log(`Successfully generated OG image at ${outputPath}`);
}

generateOG().catch(console.error);

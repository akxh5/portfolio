import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const images = [
  {
    input: 'src/assets/Profile.png',
    output: 'src/assets/Profile.webp',
    width: 512,
    quality: 85
  },
  {
    input: 'src/assets/wormhole-black.png',
    output: 'src/assets/wormhole-black.webp',
    width: 106,
    quality: 85
  },
  {
    input: 'src/assets/Timeless.jpg',
    output: 'src/assets/Timeless.webp',
    width: 162,
    quality: 85
  },
  {
    input: 'src/assets/Turbine.jpg',
    output: 'src/assets/Turbine.webp',
    width: 106,
    quality: 85
  }
];

for (const img of images) {
  try {
    await sharp(img.input)
      .resize(img.width)
      .webp({ quality: img.quality })
      .toFile(img.output);
    console.log(`✓ ${img.output}`);
  } catch (e) {
    console.log(`✗ ${img.input} — ${e.message}`);
  }
}

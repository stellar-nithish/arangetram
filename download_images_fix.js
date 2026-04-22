import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images_dir = path.join(__dirname, 'src', 'assets', 'images');
fs.mkdirSync(images_dir, { recursive: true });

const urls = [
  "https://images.unsplash.com/photo-1610486745100-349f7ba37340?q=80&w=800&auto=format&fit=crop", // dancer
  "https://images.unsplash.com/photo-1563204758-c0bca9ac8fc3?q=80&w=800&auto=format&fit=crop", // indian
  "https://images.unsplash.com/photo-1621213458641-5cba8973685e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop", // stage
  "https://images.unsplash.com/photo-1596727362302-b8dce4937cb0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"
];

async function downloadImages() {
  for (let i = 0; i < urls.length; i++) {
    const file_path = path.join(images_dir, `photo_${i+1}.jpg`);
    try {
      const res = await fetch(urls[i]);
      if (!res.ok) throw new Error(`Unexpected response ${res.statusText}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(file_path, buffer);
      console.log(`Downloaded photo_${i+1}.jpg (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Failed photo_${i+1}.jpg:`, e);
    }
  }
}

downloadImages();

const fs = require('fs');
const https = require('https');
const path = require('path');

const images_dir = path.join(__dirname, 'src', 'assets', 'images');
fs.mkdirSync(images_dir, { recursive: true });

const urls = [
  "https://images.unsplash.com/photo-1610486745100-349f7ba37340?q=80&w=800", // dancer
  "https://images.unsplash.com/photo-1563204758-c0bca9ac8fc3?q=80&w=800", // indian
  "https://images.unsplash.com/photo-1621213458641-5cba8973685e?q=80&w=800",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800", // stage
  "https://images.unsplash.com/photo-1596727362302-b8dce4937cb0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596727362302-b8dce4937cb0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596727362302-b8dce4937cb0?q=80&w=800&auto=format&fit=crop"
];

urls.forEach((url, i) => {
  const file_path = path.join(images_dir, `photo_${i+1}.jpg`);
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      // follow redirect
      https.get(res.headers.location, (res2) => {
        const file = fs.createWriteStream(file_path);
        res2.pipe(file);
      });
    } else {
      const file = fs.createWriteStream(file_path);
      res.pipe(file);
    }
  }).on('error', (e) => {
    console.error(e);
  });
});

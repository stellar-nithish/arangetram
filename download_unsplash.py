import urllib.request
import os

images_dir = r"d:\stellar\arangetram\src\assets\images"
os.makedirs(images_dir, exist_ok=True)

# Using stable unspash random keywords to get placeholder images
keywords = ["dance", "indian+culture", "stage+performance", "classical+dance", "jewelry", "bharatanatyam", "dancer"]

for i, keyword in enumerate(keywords):
    url = f"https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80" # Fallback static url
    # Actually unsplash source is deprecated, so we just use one generic image url that works or a couple.
    url = f"https://images.unsplash.com/photo-1596727362302-b8dce4937cb0?q=80&w=800&auto=format&fit=crop"
    if i == 0: url = "https://images.unsplash.com/photo-1610486745100-349f7ba37340?q=80&w=800" # dancer
    if i == 1: url = "https://images.unsplash.com/photo-1563204758-c0bca9ac8fc3?q=80&w=800" # indian
    if i == 2: url = "https://images.unsplash.com/photo-1621213458641-5cba8973685e?q=80&w=800"
    if i == 3: url = "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800" # stage
    
    file_path = os.path.join(images_dir, f"photo_{i+1}.jpg")
    try:
        urllib.request.urlretrieve(url, file_path)
        print(f"Downloaded {file_path}")
    except Exception as e:
        print(f"Failed to download {file_path}: {e}")

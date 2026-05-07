from PIL import Image
import os

img_path = "public/logo.png"
if os.path.exists(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Calculate how close to white it is
        # item is (R, G, B, A)
        r, g, b, a = item
        # If it's pure white, alpha is 0
        # If it's near white, fade the alpha
        # Gold is around (200, 150, 50), which has an average far from 255
        if r > 230 and g > 230 and b > 230:
            # Map 230-255 to alpha 255-0
            avg = (r + g + b) / 3
            alpha = int(max(0, 255 - (avg - 230) * (255 / 25)))
            newData.append((r, g, b, alpha))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(img_path, "PNG")
    print("Background removed.")
else:
    print("File not found.")

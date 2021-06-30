from os import listdir
from os.path import join
import json
from PIL import Image

files = list(listdir("./photos/"))
data = []
for f in files:
  im = Image.open('./thumbnails/' + f)
  width, height = im.size
  data.append({'original': 'assets/imgs/photos/' + f, 'thumbnail': 'assets/imgs/thumbnails/' + f, 'ratio': float(height)/width})

data.reverse()
json.dump(data, open('./meta.json', 'w'))

import json
from PIL import Image

data = json.load(open("meta.json", 'r'))
prev_caption = ""
for line in data:
  im = Image.open("../../" + line['thumbnail'])
  im.show()
  caption = input("caption for {}?".format(line['original']))
  if caption != "":
    if caption == "same":
      caption = previous_caption
    line['caption'] = caption

  previous_caption = caption

json.dump(data, open('./meta.json', 'w'))

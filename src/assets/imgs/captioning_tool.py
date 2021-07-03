import json
from PIL import Image
import argparse


parser = argparse.ArgumentParser(description='Captioning tool')
parser.add_argument('--all', action='store_true', help="Whether or not to show all image or only the ones that have an empty caption")
args = parser.parse_args()

data = json.load(open("meta.json", 'r'))
prev_caption = ""
for line in data:
  if args.all or line['caption'] != "":
    im = Image.open("../../" + line['thumbnail'])
    im.show()
    caption = input("caption for {}?".format(line['original']))
    if caption != "":
      if caption == "same":
        caption = previous_caption
      line['caption'] = caption

  previous_caption = caption

json.dump(data, open('./meta.json', 'w'))

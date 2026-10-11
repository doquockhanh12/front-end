from pathlib import Path
from PIL import Image,ImageOps,ImageDraw
for role in ['tutor','public']:
 root=Path('playwright-report')/('audit-'+role)
 for width in [1440,1024,390]:
  files=sorted(root.glob(str(width)+'-*.png'))
  files=[p for p in files if 'inner-' not in p.name]
  sheet=Image.new('RGB',(1000,((len(files)+3)//4)*400),'#ddd')
  draw=ImageDraw.Draw(sheet)
  for i,p in enumerate(files):
   pic=Image.open(p).convert('RGB'); pic.thumbnail((240,360))
   x=(i%4)*250;y=(i//4)*400
   sheet.paste(pic,(x,y+25));draw.text((x,y),p.name,fill='black')
  sheet.save(root/(str(width)+'-contact.jpg'))

# DIRPATH=$1

# jpgでもpngでも回した
for FILE in *.jxl.webp.webp
do
  convert ${FILE} ${FILE%.jxl.webp.webp}.webp
  rm ${FILE}
done
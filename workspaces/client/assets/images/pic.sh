# DIRPATH=$1

# jpgでもpngでも回した
for FILE in *.png.webp
do
  convert ${FILE} ${FILE%.png.webp}.webp
  rm ${FILE}
done
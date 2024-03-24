# DIRPATH=$1

# jpgでもpngでも回した
for FILE in *.jxl
do
  convert ${FILE} ${FILE%.jpg}.webp
  rm ${FILE}
done
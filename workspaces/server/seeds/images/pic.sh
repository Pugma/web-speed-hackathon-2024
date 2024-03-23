# DIRPATH=$1

# jpgでも回した
for FILE in *.png
do
  convert ${FILE} ${FILE%.jpg}.webp
  rm ${FILE}
done
FROM mongo

COPY news.json /news.json

CMD mongoimport \
    --host database \
    --db test \
    --collection news \
    --type json \
    --file /news.json \
    --jsonArray \
    --drop \
    -v
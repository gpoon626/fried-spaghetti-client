API="http://localhost:4741"
URL_PATH="/movies"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "movie": {
      "title": "'"${TITLE}"'",
      "rating": "'"${RATING}"'"
    }
  }'

echo

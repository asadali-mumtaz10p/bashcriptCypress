username="Your Gmail Id"
password="Your Password"

echo
curl  -u $username:$password --silent "https://mail.google.com/mail/feed/atom" | \tr -d '\n'



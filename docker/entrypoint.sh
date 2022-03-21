if [ $(echo "$NODE_ENV")=="develop" ]
then
    npm run start
else
    npm run build
fi

echo "`date`: 🤖 All ready boss!"
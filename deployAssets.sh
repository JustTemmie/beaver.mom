# echo "Switching to branch main"
# git checkout main

# echo "Building app..."
# npm run build

echo "Deploying files to server..."
scp -r public/* temmie@direct.beaver.mom:/var/www/beaverMom/public/

echo "Done!"
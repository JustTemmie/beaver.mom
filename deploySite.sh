# echo "Switching to branch main"
# git checkout main

# echo "Building app..."
# npm run build

echo "Deploying files to server..."
scp -r build/* temmie@direct.beaver.mom:/var/www/beaverMom/

echo "Done!"
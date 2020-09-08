# stutern

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploying to production server
1. Push from local machine to productio server 
```

git push deploy master
```

2. SSH into the production server and run the following
```
# /var/www/html/Vue
npm install
npm run build
sudo service nginx restart
```


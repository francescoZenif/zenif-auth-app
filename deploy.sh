yarn
yarn staging -- --sourcemap 
cp -r ./temp-assets ./dist/temp-assets
cat > dist/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  RewriteCond %{HTTPS} off [OR]
  RewriteCond %{HTTP_HOST} !^www\. [NC]
  RewriteRule ^ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
  
  RewriteCond %{REQUEST_URI} ^(.+)/$
  RewriteRule ^ %1 [R=301,L]
</IfModule>

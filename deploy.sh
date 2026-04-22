yarn
yarn staging -- --sourcemap
cat > dist/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On

  # Redirect all requests to index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]

  # Optional: Handle trailing slash removal
  RewriteCond %{REQUEST_URI} ^(.+)/$
  RewriteRule ^ %1 [R=301,L]
</IfModule>
 
# Optional: Add caching for better performance
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType image/gif "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

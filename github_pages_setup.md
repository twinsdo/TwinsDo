# GitHub Pages Setup Instructions for TwinsDo.com

This guide will walk you through the process of setting up your TwinsDo website on GitHub Pages and connecting it to your custom domain (TwinsDo.com).

## Step 1: Upload Files to Your GitHub Repository

1. Go to your GitHub repository: https://github.com/twinsdo/TwinsDo
2. Click on "Add file" > "Upload files"
3. Drag and drop or select all the files from the package I've prepared:
   - index.html
   - styles.css
   - script.js
   - All files in the images/ folder
4. Add a commit message like "Add website files with multilanguage support"
5. Click "Commit changes"

## Step 2: Enable GitHub Pages

1. Go to your repository's "Settings" tab
2. Scroll down to the "GitHub Pages" section (or click on "Pages" in the left sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for GitHub to build your site

## Step 3: Configure Your Custom Domain

1. In the GitHub Pages section, enter "twinsdo.com" in the "Custom domain" field
2. Click "Save"
3. Check the "Enforce HTTPS" option (recommended for security)

## Step 4: Configure Your Domain at GoDaddy

1. Log in to your GoDaddy account
2. Go to "My Products" > "Domains" and select TwinsDo.com
3. Click "Manage DNS"
4. Add the following DNS records:

   ### Option A: Using an A record (recommended)
   Add these 4 A records pointing to GitHub's IP addresses:
   - Type: A, Name: @, Value: 185.199.108.153, TTL: 1 hour
   - Type: A, Name: @, Value: 185.199.109.153, TTL: 1 hour
   - Type: A, Name: @, Value: 185.199.110.153, TTL: 1 hour
   - Type: A, Name: @, Value: 185.199.111.153, TTL: 1 hour

   ### Option B: Using a CNAME record
   - Type: CNAME, Name: www, Value: twinsdo.github.io, TTL: 1 hour
   
   Note: If you use Option B, your site will be accessible at www.twinsdo.com, not twinsdo.com

5. Save your changes

## Step 5: Verify Setup

1. Wait for DNS changes to propagate (can take up to 24-48 hours)
2. Visit https://twinsdo.com to verify your site is working
3. Test the language switcher by clicking on the flag icons

## Troubleshooting

- If your site doesn't appear after 48 hours, verify your DNS settings
- If you see a 404 error, make sure your repository contains an index.html file
- If the language switcher doesn't work, check the browser console for errors

## Making Future Updates

To update your website in the future:
1. Edit the files locally
2. Commit and push changes to your GitHub repository
3. GitHub Pages will automatically rebuild your site

## Need Help?

If you encounter any issues, feel free to reach out for assistance!

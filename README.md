# This is small example of a PWA and web push notification(internal)

### The Setup
Create a directory for the app and add js, css, and images subdirectories. It should look like this when you’re finished:

```bash
/Hello-PWA   # Project Folder
    /css     # Stylesheets
    /js      # Javascript
    /images  # Image files.
```
### Testing the App

use Google’s Lighthouse in google chrome developper tool

### server worker

your going to notice that a put sw.js this is our server worker, the reason it’s saved in the app root is to give it access to all of the app’s files.
This is becauses service workers only have permission to access files in the same directory and sub-directories.

## You coud clone the repo and test it your self

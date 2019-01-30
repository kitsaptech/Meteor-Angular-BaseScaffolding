# Angular 5.x for use with Meteor

Unlike the Angular-Meteor official site with tutorials that are tied to ionic and webpack, this is just a basic Angular 5.x scaffolding for Meteor.  With this scaffolding you cannot use angular-cli without creating an appropriate schema.

# Usage

**Step 1)**
'''
Create an app meteor create myApp --bare
'''

**Step 2)**
'''
Change directories to your app cd myApp
'''

**Step 3)**
'''
Remove package meteor remove static-html
'''

**Step 4)**
'''
Add package meteor add angular-compilers
'''

**Step 5)**
'''
Clone or Unzip the attached scaffolding into the app.  It will have the folders client, server, imports, and files package.json, etc.
'''

**Step 6)**
'''
Update the meteor package:  meteor npm install
'''

**Step 7)**
'''
Run meteor:  meteor run
'''
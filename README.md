# wedding-mobile-app

#SET UP
  1. Follow ionic installation steps at:  
    __Prerequisites__ 
       1. Install npm and node  
       2. Run `npm install -g ionic 
       3. Run `npm install -g cordova`
       (The -g attribute is used to indicate global mode. This makes sure the package is installed in global mode)`  
      __More detailed steps and ionic tutorial at__ 
      <http://ionicframework.com/docs/v2/getting-started/installation/>  
       4. Make sure web-service- weddingApi Rest Api is running.  
            <https://github.com/palipind/wedding-organizer>

  2. Running the app  
      1. Inside the project folder run - `npm install` (not always- only after git clone). This step will install packages in   local mode inside the project directory. You would see a node_modules folder created which would contain packages.
      2. Run `ionic state restore` (Optional- only once)  
      
      3. Run using __`ionic serve`__ -> Click 'Get All Weddings'  
      This should hit the service and get list of wedding in the db.

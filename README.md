# MongoDB Maintenance Scripts on Heroku

### Set up Heroku app
    $ heroku create --stack cedar --buildpack http://github.com/cwarden/heroku-buildpack-mongodb.git
    $ git push heroku
    $ heroku config:set MONGO_DB=<db_name> MONGO_HOST=<mongo_host> MONGO_USER=<username> MONGO_PASS=<password>

### Test connecting to replica set
    $ heroku run rs-connect

### Add a job to purge old documents
    $ heroku addons:add scheduler:standard
    $ heroku addons:open scheduler

Add a job for `rs-connect scripts/purge-old-documents.js`

# MongoDb API Connect

<p> Fast n Easy Connection with MongoDb .</p>

## Introduction

<p> This package helps you in connection with the MongoDb without using any connector like mongoose Now creating db is as easy as using fetch() or XmlHttprequest .Remove the hassel of writing long codes .</p>

## How to Use ?
<p> First you have to deploy this node js app using any cloud services , keep the website with you as it will be used later</p>
<p> Create a Mongodb Atlas account and login in into it.</p>
<p> Create a Project and set the IP address to 0.0.0.0 , So that it can be access from anywhere.</p>
<p> Create a cluster in the Project .</p>
<p> Create a user and write down thw username , password and the connection URL so that it can be used later .</p>

### that's it you are good to go...
## Current features
<p> Currently only the cretion of db is supported and you can insert sata into it</p>
<p> I am in the process of adding support for the CRUD operation</p>

## Body of the Request

```
{
  "data": [
    {
      "field_1": "value_1",
      "field_2": "value_2"
    },
    {
      "field_1": "value_1",
      "field_2": "value_2"
    }
  ],
  "url": "<Your Mongodb Connection Url to the Cluster Created on the Mongodb Atlas>",
  "model": "<Name of the db>",
  "schema": {
    "field_1": "Data Type supported with the MongoDb",
    "field_2": "Data Type supported with the MongoDb"
  }
}
```
<p> Now you havr to do a post request on the url ( whihch i told you to save i the earlier process ) with the body having the above structure </p>
<p> you will see that the db is created with the data in it which u passed</p>

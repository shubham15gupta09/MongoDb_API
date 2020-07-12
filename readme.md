# MongoDb API Connect

<p> Fast n Easy Connection with MongoDb .</p>

## Introduction

<p> This package helps you in connection with the MongoDb without using any connector like mongoose Now creating db is as easy as using fetch() or XmlHttprequest .Remove the hassel of writing long codes as package will handle it automatically .</p>

## How to Use ?

<p> Create a Mongodb Atlas account and login in .</p>
<p> Create a Project and set the IP address to 0.0.0.0 , So that it can be access from anywhere.</p>
<p> Create a cluster in the Project .</p>
<p> Create a user and write down thw username , password and the connection URL so that it can be used later .</p>

### that's it you are good to go...

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

# Server to Act as JSONEndpoint for JsonToCreateAEMPage project

This is a project is simply using MongoDB to serve as an endpoint that would provide a JSON respones that could be converted into an AEM page (see: JsonToCreateAEMPage).

## How to Run:
On the folder run command 
    - node myjsondb.js

Verify by opening http://localhost:3000/jsontoaem on your browser.

## Requires:
This server requires:
* MongoDB
* Express.js
* Node.js

## Note:
This will create a free form schema and then add datas that simulate the ff components:
* Title
* Text
* Image
* TextImage

## Sample Output:
[
  {
    "_id": "56fcaaceccebace37ac62226",
    "title": {
      "text": "This is a Title"
    },
    "__v": 0
  },
  {
    "_id": "56fcaaceccebace37ac62228",
    "image": {
      "title": "My Image",
      "fileReference": "\/content\/dam\/geometrixx\/travel\/train_man_working.jpg",
      "linkUrl": "http:\/\/www.adobe.com\/au\/marketing-cloud\/enterprise-content-management.html",
      "alt": "alternate"
    },
    "__v": 0
  },
  {
    "_id": "56fcaaceccebace37ac62227",
    "text": {
      "text": "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<\/p>"
    },
    "__v": 0
  },
  {
    "_id": "56fcaaceccebace37ac62229",
    "textimage": {
      "text": "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut<\/p>",
      "alignment": "right",
      "title": "My TextImage",
      "fileReference": "\/content\/dam\/projects\/media\/cover",
      "linkUrl": "https:\/\/www.hackerrank.com\/",
      "alt": "alternate"
    },
    "__v": 0
  }
]

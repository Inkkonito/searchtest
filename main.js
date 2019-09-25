const algoliasearch = require("algoliasearch");
const client = algoliasearch("0VFADHWKG0", "5711bdb2cad094b4b66cfcde466a9d00");
const index = client.initIndex("TestJPI_Basket");

index.addObject({
    objectID: '123',
    name : 'Julien Pitre',
    team : 'Thunder',
    points : '0'
  }, (err, { objectID } = {}) => {
    console.log(`objectID=${objectID}`);
  });

const { algoliasearch } = require('algoliasearch');

const appId = process.env.ALGOLIA_APP_ID || 'YOUR_APP_ID';
const adminKey = process.env.ALGOLIA_ADMIN_KEY || 'YOUR_ADMIN_API_KEY';
const indexName = process.env.ALGOLIA_INDEX || 'sap_data_index';

if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_ADMIN_KEY || appId === 'YOUR_APP_ID' || adminKey === 'YOUR_ADMIN_API_KEY') {
  console.warn('Algolia credentials are not configured. Skipping index-algolia prebuild.');
  process.exit(0);
}

const client = algoliasearch(appId, adminKey);

// Prepare your SAP records
const records = [
  { objectID: 'MAT-12345', name: 'SAP Material Alpha', category: 'Parts', description: '...' },
  { objectID: 'MAT-67890', name: 'SAP Material Beta', category: 'Services', description: '...' }
];

// Push to Algolia
(async () => {
  try {
    const { objectIDs } = await client.saveObjects({ indexName, objects: records });
    console.log(objectIDs);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

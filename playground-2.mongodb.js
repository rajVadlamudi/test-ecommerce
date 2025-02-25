
use('ecommerce-nextjs')
db.getCollection('carts').insertMany([
  {userId: '1', cartIds: ['123','234']},
  {userId: '2', cartIds: ['345','456']},
]);

console.log(db.getCollection('carts').find({}))

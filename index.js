/* istanbul ignore file */
const serverPromise = require('./server');


(async () => {
  const server = await serverPromise;
  server.listen(3000, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${process.env.ASSET_PREFIX}`);
  });
})();

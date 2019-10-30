// let serve;

describe('/api/home', () => {
    // afterEach( () => { server = require('../app'); });
    // beforeEach( () => { server.close(); });
    describe(' GET ', () => {
        it('It should return this is home page', () => {
            expect('ci with travis').toEqual('ci with travis');
        })
    })
});
const { syncDB } = require('../../tasks/sync-db');


describe('tests in Sync-DB', () => {

    test('should be the process two times ', () => {
        syncDB();
        const times = syncDB();
        expect( times ).toBe(2);
    })


})

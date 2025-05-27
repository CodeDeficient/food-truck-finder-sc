import {
    assertFails,
    assertSucceeds,
    initializeTestEnvironment,
    RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import { readFileSync } from 'fs';
import { resolve } from 'path';

let testEnv: RulesTestEnvironment;

beforeAll(async () => {
    // It's important to use a unique projectId for each test suite,
    // or ensure emulators are not running in parallel with conflicting projectIds.
    // Using a dynamic projectId based on a timestamp or a random string can help.
    const projectId = `test-rules-${Date.now()}`; 
    testEnv = await initializeTestEnvironment({
        projectId: projectId,
        firestore: {
            rules: readFileSync(resolve(__dirname, '../../firestore.rules'), 'utf8'),
            host: 'localhost', // Ensure this matches your firebase.json emulator host
            port: 8080,      // Ensure this matches your firebase.json emulator port
        },
    });
});

afterAll(async () => {
    await testEnv.cleanup();
});

// Optional: Clear data between tests if your tests write data
beforeEach(async () => {
    await testEnv.clearFirestore();
});

describe('Firestore Security Rules', () => {
    // Trucks Collection
    describe('Trucks Collection', () => {
        it('should ALLOW unauthenticated users to GET a document from the trucks collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            // Prepare a document to get (optional, but good for testing specific doc reads)
            // await testEnv.withSecurityRulesDisabled(async (context) => {
            //   await context.firestore().collection('trucks').doc('testTruck').set({ name: 'Test Truck' });
            // });
            await assertSucceeds(unauthedDb.collection('trucks').doc('testTruckId').get());
        });

        it('should ALLOW unauthenticated users to LIST documents from the trucks collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertSucceeds(unauthedDb.collection('trucks').get());
        });

        it('should DENY unauthenticated users to CREATE a document in the trucks collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertFails(unauthedDb.collection('trucks').doc('newTruck').set({ name: 'New Truck' }));
        });

        it('should DENY unauthenticated users to UPDATE a document in the trucks collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            // Need a document to exist to test update, can be setup withSecurityRulesDisabled
            // For simplicity, assuming write fail will cover this if doc doesn't exist or if it does
            await assertFails(unauthedDb.collection('trucks').doc('existingTruck').update({ name: 'Updated Truck' }));
        });

        it('should DENY unauthenticated users to DELETE a document in the trucks collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertFails(unauthedDb.collection('trucks').doc('existingTruck').delete());
        });
    });

    // Schedules Collection
    describe('Schedules Collection', () => {
        it('should ALLOW unauthenticated users to GET a document from the schedules collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertSucceeds(unauthedDb.collection('schedules').doc('testScheduleId').get());
        });

        it('should ALLOW unauthenticated users to LIST documents from the schedules collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertSucceeds(unauthedDb.collection('schedules').get());
        });

        it('should DENY unauthenticated users to CREATE a document in the schedules collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertFails(unauthedDb.collection('schedules').doc('newSchedule').set({ time: 'Now' }));
        });

        it('should DENY unauthenticated users to UPDATE a document in the schedules collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertFails(unauthedDb.collection('schedules').doc('existingSchedule').update({ time: 'Later' }));
        });

        it('should DENY unauthenticated users to DELETE a document in the schedules collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertFails(unauthedDb.collection('schedules').doc('existingSchedule').delete());
        });
    });

    // Default Deny Rules
    describe('Default Deny Rules', () => {
        it('should DENY unauthenticated users to read from an undefined collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertFails(unauthedDb.collection('undefinedCollection').doc('testDoc').get());
        });

        it('should DENY unauthenticated users to write to an undefined collection', async () => {
            const unauthedDb = testEnv.unauthenticatedContext().firestore();
            await assertFails(unauthedDb.collection('undefinedCollection').doc('testDoc').set({ data: 'test' }));
        });
    });
});

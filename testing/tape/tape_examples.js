'use strict';

var test = require('tape');


// simple equality with an end
// If you have an indefinite number of assertions, sometimes it's easier to call t.end() instead:
test('>>> basic arithmetic', function (t) {
    t.equal(2 + 3, 5);
    t.equal(7 * 8 + 9, 65);
    t.end();
    t.comment("\n");
});


// deep equality
// To compare array and object references deeply, you can use t.deepEqual():
test('>>> deep equality', function (t) {
    t.deepEqual([ 3, 4, 5 ], [ 3, 4, 2+3 ]);
    t.deepEqual(
        { a: 7, b: [ 8, 9 ] },
        { a : 3+4, b: [ 4*2 ].concat(3*3) }
    );
    t.end();
    t.comment("\n");
});


// comparing booleans
// Just use .ok() to assert truthiness:
test('>>> comparing booleans', function (t) {
    t.ok(3 > 4 || 5 > 2);
    t.end();
    t.comment("\n");
});


// negations
// For each kind of assertion, prepend (and camel-case) a not to turn it into a negative assertion:
test('>>> negatives', function (t) {
    t.notEqual(1+2, 5);
    t.notDeepEqual([1,2], [12]);
    t.notOk(false);
    t.end();
    t.comment("\n");
});


// pass/fail
// If you need a test to just fail, you can call t.fail():
test('>>> empty map', function(t) {
    [].map(function() {
        t.fail('this callback should never fire');
    });
    t.end();
    t.comment("\n");
});
// Conversely, there is a t.pass() which always succeeds:
test('>>> map with elements', function(t) {
    [2,3].map(function() {
        t.pass();
    });
    t.end();
    t.comment("\n");
});


// more info
// You can always add an assertion description as the last argument:
test('>>> more info', function (t) {
    t.equal(1+2, 3, 'basic arithmetic still works');
    t.ok(3+4>5, 'inequalities are as we might expect');
    t.end();
    t.comment("\n");
});


// asynchronous
// Since we either plan out the number of assertions explicitly with t.plan(n) or end the test explicitly with t.end(),
// we don't need to do anything differently when our tests make asynchronous calls:
test('>>> asynchronous results', function (t) {
    t.plan(2);
    t.equal(2+3, 5);
    setTimeout(function () {
        t.equal(5+5, 10);
    }, 500);
    t.comment("\n");
});


// multiple serial tests
// The 'first' test will run, then the 'second'.
test('>>> first', function (t) {
    t.plan(1);
    setTimeout(function () { t.ok(true); }, 200);
    t.comment("\n");
});
test('>>> second', function (t) {
    t.plan(1);
    setTimeout(function () { t.ok(true); }, 100);
    t.comment("\n");
});



// nesting tests
// You probably shouldn't do this very often, but you can have nested tests too:
test('nested', function (t) {
    t.test('>>> nested first', function (st) {
        st.plan(1);
        st.equal(1+2, 3);
    });

    t.test('>>> nested second', function (st) {
        st.plan(1);
        setTimeout(function () {
            st.pass();
        }, 100);
    });
});


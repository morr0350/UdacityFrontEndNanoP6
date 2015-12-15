/* feedreader.js */


$(function() {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    /* This suite tests the RSS feeds definitions, and  verifies
     * the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Ensures each feed in the allFeeds object has a URL defined
         * and that the URL is not empty.
         */
        it('has a nonempty, defined URL', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });

        /* Ensures each feed in the allFeeds object  has a name defined
         * and that the name is not empty.
         */
        it('has a nonempty name defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });

    /* This suite tests basic menu functionality */
    describe('The Menu', function () {
        /* Ensures the menu element is hidden by default.
         */
        it('is hidden by default', function () {
            var $body = $('body');
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
         /* Ensures the menu changes visibility when the menu icon is clicked.
          * Tests that the menu displays when clicked and hides when clicked again.
          */
        it('becomes visible when clicked', function () {
            var $body = $('body');
            var $menuIcon = $('.menu-icon-link');

            $menuIcon.trigger('click');

            expect($body.hasClass('menu-hidden')).toBe(false);

            $menuIcon.trigger('click');

            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This suite tests initial ajax loading of feed data */
    describe('Initial Entries', function () {
        /* Ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        var $entries;

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* Tests there is at least some article content after feed loads */
        it ('should contain entries in feed container after load', function () {
            $entries = $('.feed .entry');
            expect($entries.length).toBeGreaterThan(0);
        });
    });

    /* This suite tests subsequent ajax loading of feed data */
    describe('New Feed Selection', function () {

        var $articles1;
        var $articles2;

        beforeEach(function (done) {
            loadFeed(0, function () {
                $articles1 = $('.feed').text();
                loadFeed(1, function () {
                    $articles2 = $('.feed').text();
                    done();
                });
            });
        });

         /* Tests that feed content changes when a new feed is loaded by the loadFeed function*/
        it('should change content when loadfeed() loads a new feed', function() {
            expect($articles1).not.toEqual($articles2);
        });

    });
}());

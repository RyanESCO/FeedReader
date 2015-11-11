//wrapped in $() so it fully waits for DOM to load before executing
$(function() {
  //Test Suite "RSS Feeds" checks the feed related elements of the page
  describe('RSS Feeds', function() {

    //check that there are feeds defined (in allFeeds array)
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    //check that each feed as an associated URL
    it('has URL defined', function(){      
      allFeeds.forEach(function(element){
        expect(element.url).toBeDefined();
        expect(element.url).not.toBe('');
      });
    });
    
    //check that each feed has a name 
    it('has name defined', function() {
      allFeeds.forEach(function(element){
        expect(element.name).toBeDefined();
        expect(element.v).not.toBe('');
      });
    });
  });
  //Test Suite "The Menu" checks the functions of the menu
  describe('The Menu', function() {
    var $body = $('body');
    var $menuButton = $('.menu-icon-link');
    
    //check that the menu is hidden when the page is first loaded
    it('hidden when first loaded', function() {
      expect($body.hasClass('menu-hidden')).toBe(true);
    });
    
    //check for the operation of the menu button, does it open and close when clicked
    it('opens and closes when clicked', function() {
      expect($body .hasClass('menu-hidden')).toBe(true);
      $menuButton .trigger('click');
      expect($body .hasClass('menu-hidden')).toBe(false);
      $menuButton .trigger('click');
      expect($body .hasClass('menu-hidden')).toBe(true);
    });
  });
  
  //Test Suite "Initial Entries" checks the UI of the feed entries
  describe('Initial Entries', function() {
    //for these tests to be useful, a successful load of the rss feeds needs to completed
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('should have an entry in feed after load', function() {
      expect($('.feed .entry').length > 0).toBe(true);
    });

  });

  describe('New Feed Selection', function() {
    var firstHeader, secondHeader;
    var $feed = $('.feed');

    beforeEach(function(done) {
      loadFeed(0, function() {
        firstHeader = $feed.find('h2').text();
        done();
      });

    });

    it('changes the content', function() {
      loadFeed(1, function() {
        secondHeader = $feed.find('h2').text();
        console.log(secondHeader);
      });
      expect(firstHeader).not.toEqual(secondHeader);
    });
  });

}());
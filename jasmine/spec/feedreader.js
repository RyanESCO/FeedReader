
$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        it('has URL defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
              var feed = allFeeds[i];
              expect(feed.url).toBeDefined();
              expect(feed.url).not.toBe("");
          }
        });
         
          it('has name defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
              var feed = allFeeds[i];
              expect(feed.name).toBeDefined();
              expect(feed.name).not.toBe("");
           }
          });
    });

    describe('The Menu', function() {
         
         it('hidden when first loaded', function () {
              expect($('body').hasClass('menu-hidden')).toBe(true);
        });
          
       it('opens and closes when clicked', function () {
          expect($('body').hasClass('menu-hidden')).toBe(true);
          $('.menu-icon-link').trigger( "click" );
          expect($('body').hasClass('menu-hidden')).toBe(false);
          $('.menu-icon-link').trigger( "click" );
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
     });     
      
     describe('Initial Entries', function() {  
       
       beforeEach(function(done){
         loadFeed(0, function(){
           done(); 
         });
         
         
       });
       
       it('should have an entry in feed after load',function(done){
         
         expect($('.feed .entry').length>0).toBe(true);
         done();
       });
         
     });
    
describe('New Feed Selection', function(){
  var firstHeader, secondHeader;
  
    beforeEach(function(done){
        loadFeed(0, function(){
            firstHeader = $('.feed').find("h2").text();
            console.log(firstHeader);
            done();
        });
        
    });

    it('changes the content', function(done){
         loadFeed(1, function() {
             secondHeader = $('.feed').find("h2").text();
             console.log(secondHeader);
         });
        expect(firstHeader).not.toEqual(secondHeader);
        done();
    });
});

}());

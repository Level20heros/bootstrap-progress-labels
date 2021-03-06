// Generated by CoffeeScript 1.3.3
(function() {

  describe("Bootstrap Labelled Progressbars", function() {
    beforeEach(function() {
      return $('<div class="progress" data-label-max="100" data-label-step="10"><div class="bar" style="width:60%"></div></div>').appendTo('body');
    });
    afterEach(function() {
      return $('.progress').remove();
    });
    it('should be defined on the jQuery object', function() {
      return expect($(document.body).progressBarLabels).toBeTruthy();
    });
    it('should be chainable', function() {
      var progress;
      progress = $('.progress');
      progress.progressBarLabels().addClass('progress-labelled');
      return expect(progress.hasClass('progress-labelled')).toBeTruthy();
    });
    it('should automatically add labels if progress bar has correct class', function() {
      $('.progress').addClass('progress-labelled');
      $('.progress-labelled').progressBarLabels();
      return expect($('.label-group', '.progress').length).toBe(1);
    });
    it('should not do anything if the element is not a progress bar', function() {
      $(document.body).progressBarLabels();
      return expect($('.label-group').length).toBe(0);
    });
    it('should not do anything if there is no maximum or step set on the element', function() {
      $('.progress').removeAttr('data-label-max').removeAttr('data-label-step');
      $('.progress').progressBarLabels();
      return expect($('.label-group').length).toBe(0);
    });
    it('should add a label container to a correctly configured element', function() {
      $('.progress').progressBarLabels();
      return expect($('.label-group', '.progress').length).toBe(1);
    });
    it('should add the correct number of step labels', function() {
      $('.progress').progressBarLabels();
      return expect($('label', '.progress .label-group').length).toBe(11);
    });
    return it('should draw bars on the progress bar', function() {
      $('.progress').progressBarLabels();
      return expect($('div', '.progress .label-group label').length).toBe(11);
    });
  });

}).call(this);

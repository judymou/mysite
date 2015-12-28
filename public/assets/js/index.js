function App() {
  var me = this;
  App.prototype.init = function() {
    me._initProjects();  
  };

  App.prototype._initProjects = function() {
    var work = '';
    window.Projects.forEach(function(project) {
      work += '<div class="row">' +
              '  <div class="12u">' +
              '    <div class="feature">' +
              '      <span class="image"><img src="' + project.imgurl + '" alt=""></span>' +
              '      <div class="content">' +
              '        <h2>' + project.title + '</h2>' +
              '        <p>' + project.desc + '</p>' +
              '        <ul class="action">' +
              '          <li><a href="' + project.url + '" class="button alt">More</a></li>' +
              '        </ul>' +
              '      </div>' +
              '    </div>' +
              '  </div>' +
              '</div>';
    });
    var $workhtml = $(work);
    $('#work .container').append($workhtml);
  };
}
$(function() {
  window.app = new App();
  window.app.init();
});

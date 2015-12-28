function App() {
  var me = this;
  App.prototype.init = function() {
    me._initProjects();  
    me._initPersonal();
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
  
  App.prototype._initPersonal = function() {
    var personal = '';
    var count = 1;
    window.Personal.forEach(function(p) {
      personal +=
              '  <div class="4u 12u(mobile)">' +
              '    <article class="box style2">' +
              '      <a href="#" class="image featured"><img src="' + p.imgurl + '" alt="" /></a>' +
              '      <p>' + p.desc + '</p>' +
              '    </article>' +
              '  </div>';
      if (count % 3 == 0) {
        personal = '<div class="row">' + personal + '</div>';
      }
      count++;
    });
    var $personalhtml = $(personal);
    $('#portfolio .container').append($personalhtml);
  };
}
$(function() {
  window.app = new App();
  window.app.init();
});

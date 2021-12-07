console.log('Starting up');

$(document).ready(onInit)

function onInit() {
    renderProjects();
    $('.contact').click(() => openCanvas())
    $('.submit-mail').click(() => {
        var email = $('.email-add').val();
        var subject = $('.email-subject').val();
        var message = $('.message-body').val();
        if (!subject || !message || !email) return;
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=danielb32100@gmail.com&su=${subject}&body=${message}`);
    })
}

function renderProjects() {
    var projects = getProjects();
    var strHtmls = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
              <button onclick="openModal('${project.id}')" class="portfolio-link" data-toggle="modal">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
                </a>
              </button>
              <div class="portfolio-caption">
                <h4>${project.name}</h4>
              </div>
            </div>`
      })
      $('.proj').html(strHtmls.join(''));
}

function openModal(id) {
    var project = findProject(id);
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    $('.portfolio-modal h2').text(project.name);
    $('.modal-body .img-fluid').attr("src", `img/portfolio/${id}.png`);
    $('.modal-body p').text(project.desc);
    $('.date').text(`Published Date: ${new Date(project.publishAt).toLocaleDateString('en-US', options)}`);
    $('.modal-body a').attr("href", `https://dannybar-on.github.io/${id}/`);
    $('.modal-body a').text(project.name);
  }
var coursesBtn = document.getElementById('all-courses');
var collectionsBtn = document.getElementById('collections');
var wishListBtn = document.getElementById('wish-list');
var archivedBtn = document.getElementById('archived');
var navSection = document.getElementById('nav-section');
var coursesSect = document.getElementById('all-courses-section');
var collectionsSect = document.getElementById('collections-section');
var wishListSect = document.getElementById('wish-list-section');
var archivedSect = document.getElementById('archived-section');
var navBtns = document.querySelectorAll('nav p');

coursesSect.innerHTML = `<p class="fade">This is the courses section</p>`

navSection.addEventListener('click', function () {
  changePages(event);
  addBlackUnderline(event);
});

function changePages(event) {
  if (event.target === coursesBtn) {
    addPage(event, coursesSect, collectionsSect, wishListSect, archivedSect);
  } else if (event.target === collectionsBtn) {
    addPage(event, collectionsSect, coursesSect, wishListSect, archivedSect);
  } else if (event.target === wishListBtn) {
    addPage(event, wishListSect, coursesSect, collectionsSect, archivedSect);
  } else if (event.target === archivedBtn) {
    addPage(event, archivedSect, coursesSect, collectionsSect, wishListSect);
  }
}

function addPage(event, section, hidden1, hidden2, hidden3) {
  section.innerHTML = `<p class="fade">This is the ${event.target.id} section</p>`
  hidden1.innerHTML = '';
  hidden2.innerHTML = '';
  hidden3.innerHTML = '';
}

function addBlackUnderline(event) {
  for (var i = 0; i < navBtns.length; i++) {
    if (event.target === navBtns[i]) {
      event.target.classList.add('bottom-border');
    } else {
      navBtns[i].classList.remove('bottom-border');
    }
  }
}

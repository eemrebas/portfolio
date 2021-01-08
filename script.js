window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0); 
})

var container = document.getElementById('comment__form__container');

var btn = document.getElementById('comment__btn');
var form = document.getElementById('comment__form');

function getComment(e){
    e.preventDefault();
    var name = document.getElementById('visitor__name').value;
    var comment = document.getElementById('comment__box').value;
    comment = comment.replace(/\r?\n/g, '<br>');

    if((name.trim() !== "") && (comment.trim() != "")) {
        var commentDiv = document.createElement('div');
        var commentInfo = document.createElement('div');
        var commentName = document.createElement('h5');
        var deleteComment = document.createElement('button');
        var hr = document.createElement('hr');
        var commentText = document.createElement('p');

        commentDiv.className = 'comment__div';
        commentDiv.id = 'comment_';
        commentInfo.className = 'comment__info';
        commentName.className = 'comment__name';
        commentText.className = 'comment__text';
        deleteComment.className = 'comment__delete__button';
        deleteComment.id = 'delete__button_';

        commentName.textContent = name;
        deleteComment.textContent = 'Sil';
        commentText.innerHTML = comment;

        commentInfo.appendChild(commentName);
        commentInfo.appendChild(hr);
        commentInfo.appendChild(commentText);
        commentInfo.appendChild(hr);
        commentInfo.appendChild(deleteComment);
        commentDiv.appendChild(commentInfo);
        container.insertBefore(commentDiv, form);

        deleteComment.onclick = function(){
            deleteThis = this.parentElement.parentElement;
            deleteThis.remove();
        }

        document.getElementById('visitor__name').value = "";
        document.getElementById('comment__box').value = "";
    }
}

btn.addEventListener('click', getComment);

/*------------- Responsive -------------*/
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

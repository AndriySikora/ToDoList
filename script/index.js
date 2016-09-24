window.onload = function() {
    var app = {
       tasks : [
                {
                value: "Buy milk"
                },
                {
                value: "Go to the gym"
                },
                {
                value: "Play tennis"
                },
                {
                value: "Drink beer"
                },
                {
                value: "Read the book"
                }
        ],
        render: function () {
            var ul = document.createElement('ul');
            ul.setAttribute('class', 'list-group');
            document.body.appendChild(ul);

            var docFrag = document.createDocumentFragment();
            for (var i=0; i < this.tasks.length; i++) {
                var li = document.createElement('li');
                li.setAttribute('class', 'list-group-item');
                li.innerHTML = this.tasks[i].value;
                docFrag.appendChild(li);
            }
            ul.appendChild(docFrag);
        },
        createButton: function() {
            var button = document.createElement('button');
            button.innerHTML = 'Add item';
            button.setAttribute('class', 'btn btn-default');
            document.body.appendChild(button);
            button.onclick = function() {
            var li = document.createElement('li');
            li.setAttribute('class', 'list-group-item');
            ul = document.getElementsByClassName('list-group')[0];
            li.innerHTML = 'Buy a book';
            ul.appendChild(li);
            };
        }
    }
    app.render(this);
    app.createButton();
};



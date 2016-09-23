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
        }
    }
    app.render(this);
};



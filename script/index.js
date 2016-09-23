window.onload = function() {
    var app = {
        render: function () {
            var ul = document.createElement('ul');
            ul.setAttribute('class', 'list-group');
            document.body.appendChild(ul);

            var docFrag = document.createDocumentFragment();
                     var tasks = [
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
                    ];

            for (var i=0; i < tasks.length; i++) {
                var li = document.createElement('li');
                li.setAttribute('class', 'list-group-item');
                li.innerHTML = tasks[i].value;
                docFrag.appendChild(li);
            }
            ul.appendChild(docFrag);
        }
    }
    app.render();
};



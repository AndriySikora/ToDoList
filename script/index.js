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
        addItemButton: function() {
            var button = document.createElement('button');
            button.innerHTML = 'Add item';
            button.setAttribute('class', 'btn btn-default');
            button.setAttribute('type', 'button');
            document.body.appendChild(button);
            button.onclick = function() {
                var inputField = document.getElementsByClassName('form-control')[0];
                var valueInput = inputField.value;
                var li = document.createElement('li');
                li.setAttribute('class', 'list-group-item');
                ul = document.getElementsByClassName('list-group')[0];
                li.innerHTML = valueInput;
                ul.appendChild(li);
            };
        },
        createInput: function() {
            var inputField = document.createElement('INPUT');
            inputField.setAttribute('type', 'text');
            inputField.setAttribute('class', 'form-control');
            inputField.setAttribute('placeholder', 'add task');
            document.body.appendChild(inputField);
        },
        removeItemButton: function() {
            var button = document.createElement('button');
            button.innerHTML = 'Delete';
            button.setAttribute('class', 'btn btn-default');
            button.setAttribute('type', 'button');
            document.body.appendChild(button);  
            button.onclick = function() {
               ul = document.getElementsByClassName('list-group')[0];
               li = document.getElementsByTagName('li'); 
               li = li[li.length -1];
               ul.removeChild(li); 
            } 
        }
    }
    app.render(this);
    app.addItemButton();
    app.createInput();
    app.removeItemButton();
};



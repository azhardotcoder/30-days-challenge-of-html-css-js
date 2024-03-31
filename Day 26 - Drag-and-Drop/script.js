let lists = document.querySelectorAll('.list');
let rightBox = document.querySelector('.right');
let leftBox = document.querySelector('.left');
let selected = null;

// Add event listeners for dragging items from left to right
for (list of lists) {
    list.addEventListener('dragstart', function(e) {
        selected = e.target;
    });
}

// Add event listeners for dragging over and dropping onto the right box
rightBox.addEventListener('dragover', function(e) {
    e.preventDefault();
});

rightBox.addEventListener('drop', function(e) {
    if (selected !== null) {
        rightBox.appendChild(selected);
        selected = null;
    }
});

// Add event listeners for dragging items from right to left
rightBox.addEventListener('dragstart', function(e) {
    selected = e.target;
});

// Add event listeners for dragging over and dropping onto the left box
leftBox.addEventListener('dragover', function(e) {
    e.preventDefault();
});

leftBox.addEventListener('drop', function(e) {
    if (selected !== null) {
        leftBox.appendChild(selected);
        selected = null;
    }
});

/*
* one way to create object
*/
var task = {
    title: 'My title',
    description: 'My description',
    toString: function() {
        return this.description;
    }
};
Object.defineProperty(task, 'getTitle', {
    value: function () {
        return this.title;
    },
    writable: true, //you cannnot change value of the property
    enumerable: true, //the functions are not seen in Object keys
    configurable: true
})

//inheritance
var urgentTask = Object.create(task);
urgentTask.title = 'Urgent title';
/*
* other way to create object
*/
// var task = Object.create(Object.prototype);
// task.title = 'My title';
// task.description = 'My description';
// task.toString = function() {
//     return this.title + ' ' + this.description;
// }

/*
* other way to create object
*/
// var task = new Object();
// task.title = 'My title';
// task.description = 'My description';
// task.toString = function() {
//     return this.title + ' ' + this.description;
// }

console.log(task.getTitle());
console.log(urgentTask.getTitle());
console.log(Object.keys(task));
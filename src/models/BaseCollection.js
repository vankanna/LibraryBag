
export default function BaseCollection(){
    // inherit array functionality (ES6+)
    this.__proto__ = [];
    this.push(0);
    this.splice(0,1);

    this.addItem = function(item) {
        console.log(item)
        item.remove = (collection => function(){
                collection.removeItem(this); // this === item
            })(this) // this === collection
        
        this.push(item);
    }

    this.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }
}
// standard way pre-ES6
// LibraryCollection.prototype = [];
// LibraryCollection.prototype.constructor = LibraryCollection;

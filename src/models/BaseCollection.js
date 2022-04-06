
export default function BaseCollection(){
    let arr = [];
    arr.addItem = function(item) {
        console.log(item)
        item.remove = (collection => function(){
                collection.removeItem(this); // this === item
            })(this) // this === collection
        
        this.push(item);
    }

    arr.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }
    return arr;
}
// standard way pre-ES6
// LibraryCollection.prototype = [];
// LibraryCollection.prototype.constructor = LibraryCollection;

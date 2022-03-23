import {LibraryItem} from "@/models/LibraryItems";
//import {LibraryItem} from "./LibraryItems";

export default function LibraryCollection(){
    // inherit array functionality (ES6+)
    this.__proto__ = [];

    this.addItem = function(item){
        this.push(new LibraryItem(item, (collection =>
                    function(){
                        collection.removeItem(this); // this === item
                    }
            )(this) // this === collection
        ));
        return this;
    }

    this.addItemEx = function(item) {
        var lItem = new LibraryItem(item);
        lItem.remove = (collection => function(){
                collection.removeItem(this); // this === item
            })(this) // this === collection
        
        this.push(lItem);

        return this;
    }

    this.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }
}
// standard way pre-ES6
// LibraryCollection.prototype = [];
// LibraryCollection.prototype.constructor = LibraryCollection;

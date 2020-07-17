function Project(name) {
    this.name = name ;
    this.listOfProjects = [] ;

    this.isObject = function (val) {
        if (val === null) { return false };
        return (( typeof val === 'function') || (typeof val === 'object') );
    };

    this.addTaskToProject = function (obj) {
        if (this.isObject(obj)) {
            this.listOfProjects.push(obj);
            return true ;
        } else {
            return false ;
        }
    };

    this.saveDataToCache = function (itemsArray) {
        if (typeof this.name === 'string') {
            localStorage.setItem(name, JSON.stringify(itemsArray));
        } else {
            alert('Error: Report Error');
        }
    }
}

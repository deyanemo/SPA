app.factory('Store', ['localStorageService', function(localStorageService){
    var DataSetId = "Persons";
    var saved = localStorage.getItem('Persons');
    var persons = (localStorage.getItem('Persons') !==null) ? JSON.parse(saved) : [];
    return {
        add: function(name, check_genius , check_rich , check_spower) {
            var TheId = persons.length;
            // to avoid the undefined value
            check_genius = (check_genius) ? check_genius = true : check_genius = false;
            check_rich = (check_rich) ? check_rich = true : check_rich = false;
            check_spower = (check_spower) ? check_spower = true : check_spower = false;
            // Check if exist
            var existElm = [];
            persons.forEach(function(elm) {
                if (elm.name == name) {
                    existElm.push(elm);
                }
            });
            // if exist
            if (existElm.length > 0) {
                alert("sorry already exist");
            }else {
                // if not
                persons.push({id:TheId ,name: name, genius: check_genius, rich: check_rich, spower: check_spower});
            }
            // add the new data to the localstorage
            return localStorage.setItem(DataSetId , JSON.stringify(persons));
        },
        getitem : function(key) {
            return localStorageService.get(key);
        },
        clearAll: function() {
            return localStorage.clear();
        },
        deleteit: function(e) {
            // check the person
            persons.forEach(function(elm) {
                if (e.id == elm.id) {
                    // if the element clicked is the same one in array delete
                    persons.splice(persons.indexOf(elm) ,1);
                }
            });
            // update the localstorage
            return localStorage.setItem(DataSetId, JSON.stringify(persons));
        },
        update(event, e) {
            persons.forEach(function(elm) {
                if (e.id === elm.id) {
                    // getting the value of the item that clicked
                    if (e[event.target.defaultValue]) {
                        // if its true make it false
                        elm[event.target.defaultValue] = false;
                        return localStorage.setItem(DataSetId, JSON.stringify(persons));
                    }else {
                        // if its false make it true
                        elm[event.target.defaultValue] = true;
                        return localStorage.setItem(DataSetId, JSON.stringify(persons));
                    }
                }
            });
        }
    }
}]);
const TABLA = 'stopwatcherrecord';

module.exports = function(injectedStore) {

    let store = injectedStore;

    function getList() {

        return store.getList(TABLA);

    }

    function postItem(body) {

        return store.postItem(TABLA,body);
    }

    return {

        getList,
        postItem

    }

}
export default {
    myDB:{
        db:null,
        name:'',
        store:{
            name:'',
        },
        flag:0
    },
    createIndexdb:function(databaseName,version,storeName,id){
        this.myDB.store.name = storeName;
        this.myDB.name = databaseName;
        var name = databaseName;
        var ver = version || 1;
        var request = indexedDB.open(name,ver);//打开数据库
        request.onerror = function(e){
            console.log('打开失败:'+e.currentTarget.error.message);
        }
        request.onsuccess = e =>{
            this.myDB.db = e.target.result;
            console.log('成功创建并打开数据库:'+name+'version:'+ver);
            // this.myDB.flag = 1;
        }
        request.onupgradeneeded = e =>{
            console.log('222');
            var db = e.target.result;
            // var transaction = e.target.transaction;
            var store;
            if(!db.objectStoreNames.contains(storeName)){
                store = db.createObjectStore(storeName,{keyPath:id});
                store.createIndex('idindex',id,{unique:true});
                console.log('成功创建对象空间');
            }
        }
    },
    //添加数据
    addIndexdb:function(data){
        var store = this.myDB.db.transaction(this.myDB.store.name,'readwrite').objectStore(this.myDB.store.name),request;
        request = store.add(data);
        request.onerror = function(e){
            console.log('数据库中已有该数据');
        }
        request.onsuccess = function(e){
            console.log('数据成功插入数据库');
        }
    },
    //查找数据
    selectIndexdb:function(key){
        var store = this.myDB.db.transaction(this.myDB.store.name,'readwrite').objectStore(this.myDB.store.name),request;
        request = store.get(key);
        request.onerror = function(e){
            console.log('查询失败');
        }
        request.onsuccess = function(e){
            console.log('查找成功');
            var result = e.target.result;
            console.log(result);
        }
    },
    //循环遍历数据库
    getstore:function(){
        var store = this.myDB.db.transaction(this.myDB.store.name,'readwrite').objectStore(this.myDB.store.name);
        var index = store.index('idindex');
        var request = index.openCursor();
        var data = [];
        request.onsuccess = function(e){
            var cursor = e.target.result;
            if(cursor){
                console.log(cursor.value);
                data.push({imageid:cursor.value.id,imageurl:cursor.value.imageurl})
                cursor.continue();
            }
        }
        return data;
    },
    //清空数据
    clearIndexdb:function(){
        var store = this.myDB.db.transaction(this.myDB.store.name,'readwrite').objectStore(this.myDB.store.name);
        store.clear();
    },
    //删除数据库
    deleteIndexdb:function(){
        indexedDB.deleteDatabase(this.myDB.name);
        console.log('删除成功');
    }
}
function userController($scope) {
    var self = this;
    self.mySelection = [];
    self.myData = [{name: "Moroni", age: 50, born: '350 A.D.'},
                     {name: "Tiancum", age: 47, born: '350 A.D.'},
                     {name: "Jacob", age: 27, born: '350 A.D.'},
                     {name: "Nephi", age: 29, born: '350 A.D.'},
                     {name: "Enos", age: 34, born: '350 A.D.'},
                     {name: "Ether", age: 42, born: '350 A.D.'},
                     {name: "Alma", age: 43, born: '350 A.D.'},
                     {name: "Jared", age: 21, born: '350 A.D.'},
                     {name: "Gideon", age: 35, born: '350 B.C.'},
                     {name: "Jarom", age: 22, born: '350 B.C.'},
                     {name: "Omni", age: 31, born: '350 B.C.'},
                     {name: "Mosiah", age: 68, born: '350 B.C.'},
                     {name: "Helaman", age: 56, born: '350 A.D.'},
                     {name: "Sam", age: 17, born: '400 B.C.'},
                     {name: "Laman", age: 26, born: '380 B.C.'},
                     {name: "Lemuel", age: 26, born: '380 B.C.'},];
    $scope.gridOptions = {
        data: self.myData,
        enablePaging: true,
        selectedItems: self.mySelection,
        multiSelect: true
    };

    $scope.showNumberOfItems = function(){
        alert(self.mySelection.length);
    };
};
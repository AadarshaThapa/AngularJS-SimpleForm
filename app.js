var app = angular.module('myApp' , []);

app.controller( 'MyController', [
'$scope',function($scope){
   

    $scope.form= {};
    $scope.addReview = function(){
    $scope.reviews.push($scope.form)
    $scope.form = {};
}

//     $scope.employees = [
//             {
//                 fname: "asf",
//                 lname:"asda",
//                 age:49
//             },
//             {
//                     fname: "ajsf",
//                     lname:"asl,s",
//                     age:44
//             },
//             {
//                 fname: "al;sf",
//                 lname:"asd;d",
//                 age:100
//             },]

// $scope.toggleshow= function(){
//     $scope.show =!$scope.show;
// }
//              // $scope.name= "RYANN GOSLING";
    // $scope.age= 23;
    // weight: 63;
    // $scope.fname="RYAN";
    // $scope.lname="THAPA";


    //     $scope.fullname= function(){
    //         return $scope.fname +"  "+ $scope.lname;
    //     }
    //     $scope.isSpy= true;

    $scope.reviews= [
        
            {
                comment: "Lorem ipsum consectetur adipiscing elit.",
                by: "User1@gmail.com"
            },
            // {
            //     "comment": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            //     "by": "User2"
            // },
            // {
            //     "comment": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            //     "by": "User3"
            // },
            // {
            //     "comment": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            //     "by": "User4"
            // },
            // {
            //     "comment": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            //     "by": "User5"
            // },
            // {
            //     "comment": "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
            //     "by": "User6"
            // },
            // {
            //     "comment": "Maecenas sed diam eget risus varius blandit sit amet non magna.",
            //     "by": "User7"
            // },
            // {
            //     "comment": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
            //     "by": "User8"
            // },
            // {
            //     "comment": "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.",
            //     "by": "User9"
            // },
            // {
            //     "comment": "Nullam quis risus eget urna mollis ornare vel eu leo.",
            //     "by": "User10"
            // }
        
        
    ]


    
}]);
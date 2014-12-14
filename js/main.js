angular.module("donSite", ["ngRoute", "ngSanitize"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "homeController",
                templateUrl: "parts/home.html"
            })
            .when("/ego", {
                controller: "egoController",
                templateUrl: "parts/ego.html"
            })
            .when("/blog/:pageNumber", {
                controller: "blogController",
                templateUrl: "parts/blog.html"
            })
            .when("/work", {
                controller: "workController",
                templateUrl: "parts/work.html"
            })
            .when("/blog/:pageNumber/:articleID", {
                controller: "articleController",
                templateUrl: function($routeParams){
                    //depending on the articleID ($routeParam), this function will dynamically load the correct html page.
                    return "articles/"+$routeParams.articleID+".html";
                }
            })
            .when("/work/:projectID", {
                controller: "projectController",
                templateUrl: function($routeParams){
                    return "projects/"+$routeParams.projectID+".html";
                }
            })
            .otherwise({
                redirectTo: "/"
            })
    })

    .controller("homeController", function ($scope, siteService) {
        siteService.closePage();
    })

    .controller("workController", function($scope, siteService, $routeParams){
        siteService.openPage();

        $scope.projectArray = siteService.getProjects();

        var filter = "";

        $scope.activeType = function () {
            return filter;
        };
        $scope.changeType = function(type){
//            $(".all-project-wrapper").velocity("transition.slideRightOut", 500);
//            $(".all-project-wrapper").velocity("transition.slideRightIn", 500)
//                .velocity({complete: function(){
//                    console.log(type);
//                }});
            filter = type;
        };

        $scope.openProject = function (k) {

            if($("#"+k).hasClass("isOpen") == true){
                $("#"+k)
                    .velocity({ height: "5.8em"}, {duration: "normal"})
                    .removeClass("isOpen");

                $("#pInfo-"+k)
                    .velocity({ left: "-100%"}, {duration: "slow"} );
                $("#pLinks-"+k)
                    .velocity({ top: "-20em"}, {duration: "slow"} );

            } else {

                //this will close previous tabs
                if($(".project").hasClass("isOpen") == true){
                    $(".project")
                        .velocity({ height: "5.8em"}, {duration: "normal"})
                        .removeClass("isOpen");
                    $(".p-info")
                        .velocity({ left: "-100%"}, {duration: "slow"} );
                    $(".p-links")
                        .velocity({ top: "-20em"}, {duration: "slow"} );
                }
                //----------------------------

                $("#"+k)
                    .velocity({ height: "30em" }, {duration: "normal"})
                    .addClass("isOpen");

                $("#pInfo-"+k)
                    .velocity({ left: "0%"}, {duration: "slow"} );
                $("#pLinks-"+k)
                    .velocity({ top: "0%"}, {duration: "slow"} );
            }
        };

        $scope.newTab = function (link) {
            if (link == "" || link == " "){
                return;
            }
            window.open(link, '_blank').focus();
        }
    })

    .controller("projectController", function($scope, siteService, $routeParams){
        siteService.openPage();
    })

    .controller("egoController", function ($scope, siteService) {
        siteService.openPage();
        $scope.column1Array = siteService.getColumn1Array();
        $scope.column2Array = siteService.getColumn2Array();
        $scope.column3Array = siteService.getColumn3Array();
        $scope.column4Array = siteService.getColumn4Array();
        $scope.column5Array = siteService.getColumn5Array();
        $scope.column6Array = siteService.getColumn6Array();
        $scope.column7Array = siteService.getColumn7Array();
        $scope.column8Array = siteService.getColumn8Array();
        $scope.column9Array = siteService.getColumn9Array();

        siteService.loadSH();

    })

    .controller("blogController", function ($scope, siteService, $routeParams) {
        siteService.openPage();
        siteService.populateShadowArray();

        $scope.pageArray  = siteService.getArticlePages();
        $scope.articleArray = siteService.getArticleArray($routeParams.pageNumber);
        $scope.pageNum = $routeParams.pageNumber;
        $scope.articleShadowArray = siteService.getShadowArray();
    })

    .controller("articleController", function($scope, siteService, $routeParams) {
        var currentArticle = null;
        var pageHeight = $(window).height();

        siteService.getCurrentArticle($routeParams.articleID, $routeParams.pageNumber);

        siteService.openPage();
        siteService.loadSH();

        var article = siteService.loadArticle();
        $scope.articleTitle = article.title;
        $scope.articleTags = article.tags;
        $scope.typeColor = article.typeColor;
        $scope.articleType = article.type;
        $scope.articleImg = article.img;
        $scope.authorInfo = article.author[0];

        $("#back2top").on('click', function(){
            $('html, body').animate(
                { scrollTop: 0 },
                { duration: 300,
                    easing: 'linear'
                }
            )
        });

    });

//    .filter("blogFilter", function(siteService, $routeParams){
//        var searchField = document.querySelector('#search-field');
//        console.log('searchField',searchField.value);
//        return function (items, name) {
//            console.log('INPUT',name);
//            if (name == '' || name == undefined){
//                return siteService.getArticleArray($routeParams.pageNumber);
//
//            } else {
//                return siteService.getShadowArray();
//            }
//        };
//
//    });
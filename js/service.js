angular.module("donSite")
    .service("siteService", function () {

        var currentPage = document.location.hash;
        var currentArticle = null;
        var shadowArticleArray = [];


        var skillsArray = [
            [
                //odd 4 items - even 5 items
                //column 1
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                }

            ],
            [
                //column 2
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                }

            ],
            [
                //column 3
                {
                    skillName: "Jquery",
                    skillDesc: "Jquery is live.",
                    skillImg: "black"
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "Illustrator",
                    skillDesc: "Making SVGs the easy way",
                    skillImg: "black"
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                }
            ],
            [
                //column 4
                {
                    skillName: "Photoshop",
                    skillDesc: "Sticking with PS for my wireframing tool.",
                    skillImg: "black"
                },
                {
                    skillName: "Parfait",
                    skillDesc: "My go-to tool when turning a wireframe into a webpage",
                    skillImg: "black"
                },
                {
                    skillName: "CSS3",
                    skillDesc: "",
                    skillImg: "black"
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                }
            ],
            [
                //column 5

                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "HTML5",
                    skillDesc: "Keepin' up with the standards!",
                    skillImg: "black"
                },
                {
                    skillName: "SASS",
                    skillDesc: "Can't live without this preprocessor.",
                    skillImg: "black"
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                }
            ],
            [
                //column 6
                {
                    skillName: "Javascript",
                    skillDesc: "Let's change the world, one line at a time.",
                    skillImg: "black"
                },
                {
                    skillName: "Angular",
                    skillDesc: "My preferred data-binding framework",
                    skillImg: "black"
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                }
            ],
            [
                //column 7
                {
                    skillName: "Terminal",
                    skillDesc: "Nerd!",
                    skillImg: "black"
                },
                {
                    skillName: "HandleBars",
                    skillDesc: "Templating like a boss.",
                    skillImg: "black"
                },
                {
                    skillName: "Git",
                    skillDesc: "",
                    skillImg: "black"
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                }
            ],
            [
                //column 8
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                }
            ],
            [
                //column 9
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                },
                {
                    skillName: "",
                    skillDesc: "",
                    skillImg: ""
                }
            ]
        ];

        /*
         * ArticleColors
         *  TODO: future me will make a function that automatically chooses the right color based on typeName/type.
         * Software Review: #83b1ff
         * Case Study: #DB5643
         * Open Source: #ff6666
         * Angular: #70c989
         */

        var articleArray = [
            [
            {
                ID: "MEGAvsDropbox",
                img: "https://lh6.ggpht.com/Gws2S5Xxlwoxvl2Ho_R1nu49VprWOGtqIFuC5ZNRM8osf3-mbNq72YNxgkmkoaGx916n1a05ew39w7nLsOLl4-4=s852",
                title: "MEGA vs Dropbox",
                typeImg: "",
                type: "Review",
                typeColor: "#83b1ff",
                tags: ["Software", "Blog"],
                author: [{name: "Don Page", title: "Web Developer", avatar: "http://xcellis.com/wp-content/uploads/2013/09/avatar-placeholder-300x284.png"}]
            },
            {
                ID: "test2",
                img: "http://i.imgur.com/eX9ytrN.jpg?1",
                title: "Test Title",
                typeImg: "",
                type: "Case Study",
                typeColor: "#DB5643",
                tags: ["Test1"],
                author: [{name: "James Joe", title: "Web Designer", avatar: "http://xcellis.com/wp-content/uploads/2013/09/avatar-placeholder-300x284.png"}]

            },
            {
                ID: "AngularTest",
                img: "http://i.imgur.com/XHm9Rs1.png",
                title: "Angular Labs",
                typeImg: "",
                type: "Angular",
                typeColor: "#70c989",
                tags: ["Angular", "something"],
                author: [{name: "Don Page", title: "Web Developer", avatar: "http://xcellis.com/wp-content/uploads/2013/09/avatar-placeholder-300x284.png"}]

            }
            ],
            [
                {
                    ID: "MEGAvsDropboxpage1",
                    img: "https://lh6.ggpht.com/Gws2S5Xxlwoxvl2Ho_R1nu49VprWOGtqIFuC5ZNRM8osf3-mbNq72YNxgkmkoaGx916n1a05ew39w7nLsOLl4-4=s852",
                    title: "page2",
                    typeImg: "",
                    type: "Review",
                    typeColor: "#83b1ff",
                    tags: ["Software", "Blog"],
                    author: [{name: "Don Page", title: "Web Developer", avatar: "http://xcellis.com/wp-content/uploads/2013/09/avatar-placeholder-300x284.png"}]
                },
                {
                    ID: "test2",
                    img: "http://i.imgur.com/eX9ytrN.jpg?1",
                    title: "Test Title2",
                    typeImg: "",
                    type: "Case Study",
                    typeColor: "#DB5643",
                    tags: ["Test1"],
                    author: [{name: "James Joe", title: "Web Designer", avatar: "http://xcellis.com/wp-content/uploads/2013/09/avatar-placeholder-300x284.png"}]

                },
                {
                    ID: "AngularTest",
                    img: "http://i.imgur.com/XHm9Rs1.png",
                    title: "Angular Labs2",
                    typeImg: "",
                    type: "Angular",
                    typeColor: "#70c989",
                    tags: ["Angular", "something"],
                    author: [{name: "Don Page", title: "Web Developer", avatar: "http://xcellis.com/wp-content/uploads/2013/09/avatar-placeholder-300x284.png"}]

                }
            ]
        ];


        this.getArticleArray = function(pageNum){
            console.log('getArticleArray:', articleArray[pageNum - 1]);
            return articleArray[pageNum - 1]; //-1 because array begins in 0 but page number counts from 1.
        }

        this.populateShadowArray = function(){
            shadowArticleArray = []; //future me will redo the logic that fills up the shadow array so it only happens once.
            console.log('populateShadowArray from', articleArray);
            for (var i=0; i < articleArray.length; i++){ //wemustgodeeper.jpg
                for (var y=0; y < articleArray[i].length; y++){
                    console.log('pushing', articleArray[i][y]);
                    shadowArticleArray.push(articleArray[i][y]);
                }
            }
        };



        this.getArticlePages = function(){
            console.log(articleArray);
            return articleArray;
        }

        this.getColumn1Array = function () {
            return skillsArray[0];
        }
        this.getColumn2Array = function () {
            return skillsArray[1];
        }
        this.getColumn3Array = function () {
            return skillsArray[2];
        }
        this.getColumn4Array = function () {
            return skillsArray[3];
        }
        this.getColumn5Array = function () {
            return skillsArray[4];
        }
        this.getColumn6Array = function () {
            return skillsArray[5];
        }
        this.getColumn7Array = function () {
            return skillsArray[6];
        }
        this.getColumn8Array = function () {
            return skillsArray[7];
        }
        this.getColumn9Array = function () {
            return skillsArray[8];
        }
        this.getColumn10Array = function () {
            return skillsArray[9];
        }

        this.getTest = function () {
            return 'GOT TEST FROM SERVICE!'
        };

        this.closePage = function () {
            currentPage = document.location.hash;
            console.log('closing page!');

            $(".overlay").fadeOut('fast');
            $("#small-logo").fadeOut("fast"); //Fail safe for if the user switches page while in the middle of window.
            $("#navBar")

                .velocity({top: "100%"}, { duration: 600 })
                .velocity({top: "-=7em"}, { duration: 400 })
                .removeClass("open");
            $("#back2top").removeClass("showing");
        };

        this.openPage = function () {
            currentPage = document.location.hash;
            $(".overlay").fadeIn('fast');
            $("#navBar").addClass("open").velocity({top: 80});
            $("#back2top").addClass("showing");

            $("#view-page")
                .velocity({ delay: 50 })
                .velocity("transition.slideUpIn", 900);
            $('.homeCanvas').velocity({height: "150"});
            $('footer').velocity("transition.slideUpIn", 900);
//            $('.elements-wrapper').velocity("transition.slideLeftIn", { stagger: 250 });

        };

        this.loadSH = function () {
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        };

        this.getArticle = function(id){
            console.log('GETTING ARTICLE');
            document.location.hash = "/blog/"+id;
        };

        this.getShadowArray = function(){
            console.log('SHADOW:', shadowArticleArray);
            return shadowArticleArray;
        }

        //find what article should be open.
        this.getCurrentArticle = function(id, page){
            for (var i = 0; i < articleArray[page - 1].length; i++){
                if (articleArray[page - 1][i].ID == id){
                    currentArticle = articleArray[page - 1][i];
                    console.log('FOUND MATCH', articleArray[i]);
                    break; //the break is so the loop doesnt keep running after a match is found.
                }else{
                    console.log('didn\'t find match')
                }
            }
        };

        this.loadArticle = function(){
            return currentArticle;
        };



        $(".overlay").on('click', function(){
            document.location.hash = 'goingHome';
//            $(".overlay").fadeOut('fast'); //this is handled by openPage closePage functions
        });

        //Time left to read the rest of article, BETA lol.
        //this will be based on the height of the page relative to the bottom. TODO: make a better algorithm later.



    });
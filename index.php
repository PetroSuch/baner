<!DOCTYPE html>
<html lang="ru">
<head>
    <meta name="HandheldFriendly" content="true">
    <title></title>
    <link rel="stylesheet" type="text/css" href="css/spr_blurb.css">
    <!-- <script src="js/jquery-3.3.1.min.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
    @keyframes leftCenter {
      from {
        left: -100%;
      }
      to {
        left: 0%;
      }
    }
    .left-center {
        animation-iteration-count: 1;
      -webkit-animation: leftCenter 0.25s;
      animation: leftCenter 0.25s;
    }

    @keyframes rightCenter {
      from {
        left: 100% ;
      }
      to {
        left:  0% ;
      }
    }
    .right-center {
        animation-iteration-count: 1;
        -webkit-animation: rightCenter 0.25s;
        animation: rightCenter 0.25s;
    }
    @keyframes top-down {
      from {
        top: -100%;
      }
      to {
        top: 0%;
      }
    }
    .top-a {
      animation-iteration-count: 1;
      -webkit-animation: top-down 0.25s;
      /* Safari 4.0 - 8.0 */
      animation: top-down 0.25s;
    }

    </style>
</head>
<body style="height: 300vh;">



    <div class="help-container" >
       
                <div class="miniTitle">
                    <span>Реклама СПР. <span class="titleComp">Dr.Айболит</span></span>
                </div>
                <img src="img/sprBlCancel.svg" class="btnCancel">
                <div class="hoverCont">
                    <div class="hoverAnimaine">
                        <span class="hoverTitle">Ветеринарная клиника в Тамбове</span>
                        <button class="sprBlActionBtn hoverBtn">
                            <span>Узнать</span>
                        </button>
                    </div>
                </div>
                <a href="#"  class="sprBlContainer" style="background: #F5F5F5; ">
                    <div class="sprBlElement " id="img_animaine">
                        <div class="pad-4-4" >
                            <div class="sprBlElement__bg " data-img="img/11.png" style="background: url(img/11.png);"></div>
                        </div>
                    </div>
                    <div class="sprBlElement" style="background: #F5F5F5; display: none;">
                        <div class="pad-4-4" >
                            <div class="sprBlElement__bg sprBlLogo">
                                <img src="img/logo.png">
                            </div>
                        </div>
                    </div>
                    <div class="sprBlElement " id="img_animaine">
                        <div class="pad-4-4" >
                            <div class="sprBlElement__bg " data-img="img/22.png" style="background: url(img/22.png);"></div>
                        </div>
                    </div>
                    <div class="sprBlElement  sprBlTitle" style="background: #F5F5F5; display: none;">
                        <div class="pad-4-4" >
                            <div class="sprBlElement__bg">
                                <img src="img/logo.png" height="60" class="sprBlLogoMob">
                                <span>Ветеринарная клиника в Тамбове</span>
                                <button class="sprBlActionBtn">
                                    <span>Узнать</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="sprBlElement " id="img_animaine">
                        <div class="pad-4-4" >
                            <div class="sprBlElement__bg " data-img="img/33.png" style="background: url(img/33.png);"></div>
                        </div>
                    </div>
                    <div class="sprBlElement" style="background: #F5F5F5; display: none;">
                        <div class="pad-4-4">
                            <div class="sprBlElement__bg sprBlText">
                                <span>Работаем с мелкими домашними животными (кошки, собаки, хорьки). Терапия. Хирургия. Вакцинация.)</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
    <script src="js/site.js"></script>

</body>
</html>
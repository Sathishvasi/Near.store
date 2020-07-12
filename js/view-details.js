$(document).ready(function () {
    let str = window.location.href;
    let ID = str.substr(str.lastIndexOf("=") + 1, str.lastIndexOf("/"));
    console.log(ID);

    // Enable loader
    $('.loader').show();

    function renderMatchDetails() {
        $.getJSON("./data/matchDetail.json", function (data) {
            // Root Element
            const rootEle = $('.details');

            // Match Title
            $('.logo-wrapper h3').text(data.leagueName);

            // Team Image render
            $(rootEle).find('#teamScore1 img').attr('src', data.imgA);
            $(rootEle).find('#teamScore2 img').attr('src', data.imgB);

            // Score Update
            $(rootEle).find('#teamScore1 .score').text(data.teamARUN);
            $(rootEle).find('#teamScore2 .score').text(data.teamBRUN);

            // Status update
            $(rootEle).find('.status-content').text(data.runStatus);
            $(rootEle).find('.status-content').addClass('show-stat');

            // Required runs
            $(rootEle).find('.reqRuns').text(data.reqRuns);

            // Run rate
            $(rootEle).find('.rrr').text(data.rRR);
            $(rootEle).find('.crr').text(data.cRR);

            // Batsman Details
            $(rootEle).find('#teamPlayer1 .batsman').text(data.batAName);
            $(rootEle).find('#teamPlayer1 .runs').text(data.batARun);
            $(rootEle).find('#teamPlayer1 .balls').text(data.batABall);
            $(rootEle).find('#teamPlayer1 .fours').text(data.batA4);
            $(rootEle).find('#teamPlayer1 .sixes').text(data.batA6);
            $(rootEle).find('#teamPlayer1 .strikeRate').text(data.batASr);

            $(rootEle).find('#teamPlayer2 .batsman').text(data.batBName);
            $(rootEle).find('#teamPlayer2 .runs').text(data.batBRun);
            $(rootEle).find('#teamPlayer2 .balls').text(data.batBBall);
            $(rootEle).find('#teamPlayer2 .fours').text(data.batB4);
            $(rootEle).find('#teamPlayer2 .sixes').text(data.batB6);
            $(rootEle).find('#teamPlayer2 .strikeRate').text(data.batBSr);

            // Bowler Details
            $(rootEle).find('#bowlerDetails .batsman').text(data.bowlerName);
            $(rootEle).find('#bowlerDetails .overs').text(data.bowlerOver);
            $(rootEle).find('#bowlerDetails .runs').text(data.bowlerRun);
            $(rootEle).find('#bowlerDetails .wickets').text(data.bowlerWicket);
            $(rootEle).find('#bowlerDetails .economy').text(data.bowlerEr);
            $(rootEle).find('#bowlerDetails .maiden').text(data.bowlerMaiden);

            // Fav tem
            $(rootEle).find('.fav-content p').text(data.favTeam);
            $(rootEle).find('#favSt p').text(data.favTeam + ':');

            $(rootEle).find('#favSt .red').text(data.FTB);
            $(rootEle).find('#favSt .green').text(data.FTL);

            $(rootEle).find('#overRuns .red').text(data.overRunsB);
            $(rootEle).find('#overRuns .green').text(data.overRunsL);

            $(rootEle).find('#RXB .red').text(data.RXBB);
            $(rootEle).find('#RXB .green').text(data.RXBL);

            // Carousel values update
            $('.slider').children().remove();
            $('.slider').removeClass('slick-initialized slick-slider');

            let sliderContent = '';
            data.overDetails.forEach(element => {
                let colorUpdate;
                switch (element) {
                    case '4':
                    case '6':
                        colorUpdate = 'high';
                        break;
                    case 'W':
                    case 'NB':
                        colorUpdate = 'low';
                        break;
                    default:
                        colorUpdate = 'mid';
                }
                sliderContent += `<div class="run-stats"><span class="${colorUpdate}">${element}</span></div>`
            });

            $('.slider').append(sliderContent);

            $(".slider").slick({
                slidesToShow: 6,
                infinite: false,
                arrows: false,
                slidesToScroll: 6
            });

            // Disable loader
            $('.loader').hide();
        });
    }

    // Init API call
    renderMatchDetails();

    // 15 seconds API call
    setInterval(() => {
        renderMatchDetails();
    }, 15000);
})
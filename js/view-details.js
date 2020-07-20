$(document).ready(function () {
    let str = window.location.href;
    let ID = str.substr(str.lastIndexOf("=") + 1, str.lastIndexOf("/"));
    console.log(ID);

    // Enable loader
    $('.loader').show();

    function renderMatchDetails() {

        $.ajax({
            type: "GET",
            url: API_HOST_URL + "detail/" + ID,
            success: function (data) {
                console.log(data);
                // Root Element
                const rootEle = $('.details');

                validateNullObj(data);
                validateNullObj(data.matchSummary);
                const matchSummary = data.matchSummary;

                // Match Title
                $('.logo-wrapper h3').text(matchSummary.leagueName);

                // Team Image render
                $(rootEle).find('#teamScore1 img').attr('src', matchSummary.imgA);
                $(rootEle).find('#teamScore2 img').attr('src', matchSummary.imgB);

                // Score Update
                $(rootEle).find('#teamScore1 .score').text(matchSummary.teamARun + "/" + matchSummary.teamAWicket + " (" + matchSummary.teamAOver + "." + matchSummary.teamABallsOver + " ov)");
                $(rootEle).find('#teamScore2 .score').text(matchSummary.teamBRun + "/" + matchSummary.teamBWicket + " (" + matchSummary.teamBOver + "." + matchSummary.teamBBallsOver + " ov)");

                // Status update
                $(rootEle).find('.status-content').text(matchSummary.ballStatus);
                $(rootEle).find('.status-content').addClass('show-stat');

                // Required runs
                $(rootEle).find('.reqRuns').text(matchSummary.matchStatus);

                // Run rate
                $(rootEle).find('.rrr').text(data.rrr === '' ? '0.0' : data.rrr);
                $(rootEle).find('.crr').text(data.crr === '' ? '0.0' : data.crr);

                // Batsman Details
                validateNullObj(data.batsManA);
                const batsManA = data.batsManA;
                $(rootEle).find('#teamPlayer1 .batsman').text(batsManA.name);
                $(rootEle).find('#teamPlayer1 .runs').text(batsManA.run);
                $(rootEle).find('#teamPlayer1 .balls').text(batsManA.balls);
                $(rootEle).find('#teamPlayer1 .fours').text(batsManA.four);
                $(rootEle).find('#teamPlayer1 .sixes').text(batsManA.six);
                $(rootEle).find('#teamPlayer1 .strikeRate').text(batsManA.SR);

                validateNullObj(data.batsManB);
                const batsManB = data.batsManB;
                $(rootEle).find('#teamPlayer2 .batsman').text(batsManB.name);
                $(rootEle).find('#teamPlayer2 .runs').text(batsManB.run);
                $(rootEle).find('#teamPlayer2 .balls').text(batsManB.balls);
                $(rootEle).find('#teamPlayer2 .fours').text(batsManB.four);
                $(rootEle).find('#teamPlayer2 .sixes').text(batsManB.six);
                $(rootEle).find('#teamPlayer2 .strikeRate').text(batsManB.SR);

                // Bowler Details
                validateNullObj(data.bowler);
                const bowler = data.bowler;
                $(rootEle).find('#bowlerDetails .batsman').text(bowler.name);
                $(rootEle).find('#bowlerDetails .overs').text(bowler.over);
                $(rootEle).find('#bowlerDetails .runs').text(bowler.run);
                $(rootEle).find('#bowlerDetails .wickets').text(bowler.wicket);
                $(rootEle).find('#bowlerDetails .economy').text(bowler.ER);
                $(rootEle).find('#bowlerDetails .maiden').text(0);

                // Fav tem
                validateNullObj(data.backLay);
                const backLay = data.backLay;
                $(rootEle).find('.fav-content p').text(backLay.FavTeam);
                $(rootEle).find('#favSt p').text(backLay.RXBTeam + ':');

                $(rootEle).find('#favSt .red').text(backLay.PointA);
                $(rootEle).find('#favSt .green').text(backLay.PointB);

                $(rootEle).find('#overRuns .red').text(backLay.OversA);
                $(rootEle).find('#overRuns .green').text(backLay.OversB);

                $(rootEle).find('#RXB .red').text(backLay.RXBA);
                $(rootEle).find('#RXB .green').text(backLay.RXBB);

                // Carousel values update
                $('.slider').children().remove();
                $('.slider').removeClass('slick-initialized slick-slider');

                let sliderContent = '';
                validateNullObj(data.balls);

                data.balls.forEach(element => {
                    let colorUpdate;
                    switch (element.trim()) {
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

                // parternship & last wkt
                $(rootEle).find('.partner').text(data.partnership);
                $(rootEle).find('.last-wkt').text(data.lastWK);

                // Disable loader
                $('.loader').hide();
            },
            error: function (xhr) {
                $('.details').hide();
                showSnackBar(xhr.statusText);
            }
        });
    }

    // Init API call
    renderMatchDetails();

    // 15 seconds API call
    setInterval(() => {
        renderMatchDetails();
    }, 15000);
})
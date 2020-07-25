$(document).ready(function () {
    $('.loader').show();

    $.ajax({
        type: "GET",
        url: API_HOST_URL + "upcoming/matches",
        success: function (data) {
            console.log(data);
            let rr = scoreCards = tabContent = checked = '';

            data.forEach((leagueData, index) => {
                scoreCards = ''
                leagueData.teams.forEach(val => {
                    var format = /-/;

                    validateNullObj(val);
                    // console.log(val);

                    rr = format.test(val.teamARun) ? (val.teamARun.split('-')[0] / val.teamAOver).toFixed(2) : (val.teamARun / val.teamAOver).toFixed(2);

                    scoreCards += `<div class="score-card upcoming">
                                <div class="team-wrapper">
                                    <div class="team">
                                        <img src="${val.imgA}" alt="Team 1" />
                                        <div class="team-details">
                                            <p class="team-name">${val.teamA}</p>
                                        </div>
                                    </div>
                                    <span class="versus">vs</span>
                                    <div class="team right">
                                        <div class="team-details">
                                            <p class="team-name">${val.teamB}</p>
                                        </div>
                                        <img src="${val.imgB}" alt="Team 2" />
                                    </div>
                                </div>
                                <div class="team-summary">
                                    <!--<span>${val.matchDate}</span>
                                    <span>${val.matchTime}</span>-->
                                    <span>NOV 12</span>
                                    <span>09:00 AM</span>
                                </div>
                                </div>`
                });
                checked = index === 0 ? 'checked' : '';
                tabContent += `<div class="tab">
                <input type="radio" id="rd${index+1}" name="rd" ${checked}>
                <label class="tab-label" for="rd${index+1}">${leagueData.leagueName}</label>
                <div class="tab-content">
                    ${scoreCards}
                </div>
                </div>`
            });

            $('.score-wrapper .tabs').html(tabContent);
            $('.loader').hide();
        },
        error: function (err) {
            let errMsg = err.responseJSON ? err.responseJSON.error : err.statusText;
            showSnackBar(errMsg);
        }
    });
});
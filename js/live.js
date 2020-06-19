$(document).ready(function () {
    $('.loader').show();
    $.getJSON("./data/response.json", function (data) {
        console.log(data);
        let scoreCards = '';
        let rr;
        data.forEach(val => {
            rr = (val.teamARun.split('-')[0] / val.teamAOver).toFixed(2);

            scoreCards += `<div class="score-card">
            <div class="team-wrapper">
                <div class="team">
                    <img src="${val.imgA}" alt="Team 1" />
                    <div class="team-details">
                        <p class="team-name">${val.teamA}</p>
                        <div class="score-details">
                            <p class="score">${val.teamARun}</p>
                            <span class="overs">${val.teamAOver}</span>
                        </div>
                    </div>
                </div>
                <span class="versus">vs</span>
                <div class="team right">
                    <div class="team-details">
                        <p class="team-name">${val.teamB}</p>
                        <div class="score-details">
                            <span class="overs">${val.teamBOver}</span>
                            <p class="score">${val.teamBRun}</p>
                        </div>
                    </div>
                    <img src="${val.imgB}" alt="Team 2" />
                </div>
            </div>
            <div class="team-status">
                <p class="status">${val.matchStatus}</p>
                <p class="run-rate">RR: ${rr}</p>
            </div>
            <div class="team-summary">
                View Details
            </div>
        </div>`
        });
        $('.score-wrapper').html(scoreCards);
        $('.loader').hide();
    }).fail(function () {
        alert("An error has occurred.");
    });
})
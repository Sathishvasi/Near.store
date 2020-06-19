$(document).ready(function () {
    $('.loader').show();
    $.getJSON("./data/upcoming.json", function (data) {
        console.log(data);
        let scoreCards = '';
        let rr;
        data.forEach(val => {

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
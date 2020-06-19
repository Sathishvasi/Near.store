$(document).ready(function () {
    $('.loader').show();
    $.getJSON("./data/response.json", function (data) {
        console.log(data);
        let scoreCards = '';
        let rr;
        data.forEach(val => {
            rr = (val.teamARun.split('-')[0] / val.teamAOver).toFixed(2);

            scoreCards += `<div class="score-card" data-id="${val.id}">
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
            <button class="team-summary">
                View Score card
            </button>
        </div>`
        });
        $('.score-wrapper').html(scoreCards);
        $('.loader').hide();
    }).fail(function () {
        alert("An error has occurred.");
    });

    $(document).on('click', '.team-summary', function (e) {
        let teamID = $(e.target).closest('.score-card').data('id');
        let host = window.location.href;
        window.location = host.substr(0,host.lastIndexOf("/"))+`/view-details.html?id=${teamID}`;
    });
})

jQuery('#entradaId').keyup(function () {
  this.value = this.value.replace(/[^0-9\.]/g, '');
});


$(document).ready(function () {

    $("#btn").click(function () {
        var numHero = $("#entradaId").val();
        if (numHero > 731){ 
          alert('Heroe número ' + numHero + ' no existe');
          location.reload();
         }
         
        $.ajax({
            type: "GET",
            url: "https://superheroapi.com/api.php/10225816114010855/" + numHero,
            dataType: "json",
            success: function (dataApi) {
                console.log(dataApi);
                resultHero = dataApi.image["url"];
                $('#heroImg').attr("src", resultHero);
                $('#heroName').text(dataApi.name);
                $('#heroFullName').text(dataApi.biography["full-name"]);
                $('#heroConex').text(dataApi.connections["group-affiliation"]);               
                $('#heroAlias').text(dataApi.biography.aliases);
                $('#heroOcupacion').text(dataApi.work.occupation);
                $('#heroAltura').text(dataApi.appearance.height);
                $('#heroPeso').text(dataApi.appearance.weight);
              
                var dataPoints = [];
                var i = 0;
                $.each(dataApi.powerstats, (index, value) => {                   
                    dataPoints.push({
                        y: value,
                        label: index
                    });
                    i++;
                });

                var chart = new CanvasJS.Chart("chartContainer", {
                    animationEnabled: true,
                    title: {
                        text: "Estadistica de poder"
                    },
        
                    data: [{
                        type: "pie",
                        startAngle: 240,
                        yValueFormatString: "##0.00\"%\"",
                        indexLabel: "{label} {y} ",
                        dataPoints: dataPoints
                    }]
                });
                chart.render();
            },
            error: function () {
                console.log("No se ha podido obtener la información");
              }
        });
    });
});




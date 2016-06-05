
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";


/**
 * Prijava v sistem z privzetim uporabnikom za predmet OIS in pridobitev
 * enolične ID številke za dostop do funkcionalnosti
 * @return enolični identifikator seje za dostop do funkcionalnosti
 */
function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}


/**
 * Generator podatkov za novega pacienta, ki bo uporabljal aplikacijo. Pri
 * generiranju podatkov je potrebno najprej kreirati novega pacienta z
 * določenimi osebnimi podatki (ime, priimek in datum rojstva) ter za njega
 * shraniti nekaj podatkov o vitalnih znakih.
 * @param stPacienta zaporedna številka pacienta (1, 2 ali 3)
 * @return ehrId generiranega pacienta
 */
function generirajPodatke(stPacienta) {
  var ehrId = "";
  
  var pdata = {
      p1: {
          firstNames: "Hulk",
          lastNames: "Hogan",
          dateOfBirth: "1953-08-11T01:00"
      },
      p2: {
          firstNames: "John",
          lastNames: "Doe",
          dateOfBirth: "1970-01-01T11:01"
      },
      p3: {
          firstNames: "Gabe",
          lastNames: "Newell",
          dateOfBirth: "1962-11-03T05:00"
      }
  };
  
  var composition_data = {
    p1: {
            "ctx/time": "2014-3-19T13:10Z",
            "ctx/language": "en",
            "ctx/territory": "CA",
            "vital_signs/body_temperature/any_event:0/time": "2014-3-19T13:10Z",
            "vital_signs/body_temperature/any_event:0/temperature|magnitude": 37.1,
            "vital_signs/body_temperature/any_event:0/temperature|unit": "°C",
            "vital_signs/blood_pressure/any_event:0/systolic": 120,
            "vital_signs/blood_pressure/any_event:0/diastolic": 80,
            "vital_signs/height_length/any_event:0/body_height_length": 201,
            "vital_signs/body_weight/any_event:0/body_weight": 137,
            
            "vital_signs/body_temperature/any_event:1/time": "2015-3-19T13:10Z",
            "vital_signs/body_temperature/any_event:1/temperature|magnitude": 37.1,
            "vital_signs/body_temperature/any_event:1/temperature|unit": "°C",
            "vital_signs/blood_pressure/any_event:1/systolic": 119,
            "vital_signs/blood_pressure/any_event:1/diastolic": 80,
            "vital_signs/height_length/any_event:1/body_height_length": 201,
            "vital_signs/body_weight/any_event:1/body_weight": 140,
            
            "vital_signs/body_temperature/any_event:2/time": "2016-3-19T13:10Z",
            "vital_signs/body_temperature/any_event:2/temperature|magnitude": 37.1,
            "vital_signs/body_temperature/any_event:2/temperature|unit": "°C",
            "vital_signs/blood_pressure/any_event:2/systolic": 120,
            "vital_signs/blood_pressure/any_event:2/diastolic": 80,
            "vital_signs/height_length/any_event:2/body_height_length": 201,
            "vital_signs/body_weight/any_event:2/body_weight": 137
    },
    
    p2: {
            "ctx/time": "2014-3-19T13:10Z",
            "ctx/language": "en",
            "ctx/territory": "CA",
            "vital_signs/body_temperature/any_event:0/time": "2014-3-19T13:10Z",
            "vital_signs/body_temperature/any_event:0/temperature|magnitude": 37.1,
            "vital_signs/body_temperature/any_event:0/temperature|unit": "°C",
            "vital_signs/blood_pressure/any_event:0/systolic": 150,
            "vital_signs/blood_pressure/any_event:0/diastolic": 70,
            "vital_signs/height_length/any_event:0/body_height_length": 105,
            "vital_signs/body_weight/any_event:0/body_weight": 600,
            
            "vital_signs/body_temperature/any_event:1/time": "2015-3-19T13:10Z",
            "vital_signs/body_temperature/any_event:1/temperature|magnitude": 37.1,
            "vital_signs/body_temperature/any_event:1/temperature|unit": "°C",
            "vital_signs/blood_pressure/any_event:1/systolic": 148,
            "vital_signs/blood_pressure/any_event:1/diastolic": 72,
            "vital_signs/height_length/any_event:1/body_height_length": 106,
            "vital_signs/body_weight/any_event:1/body_weight": 601,
            
            "vital_signs/body_temperature/any_event:2/time": "2016-3-19T13:10Z",
            "vital_signs/body_temperature/any_event:2/temperature|magnitude": 37.1,
            "vital_signs/body_temperature/any_event:2/temperature|unit": "°C",
            "vital_signs/blood_pressure/any_event:2/systolic": 149,
            "vital_signs/blood_pressure/any_event:2/diastolic": 70,
            "vital_signs/height_length/any_event:2/body_height_length": 106,
            "vital_signs/body_weight/any_event:2/body_weight": 605          
    },
    
    p3: {
            "ctx/time": "2014-3-19T13:10Z",
            "ctx/language": "en",
            "ctx/territory": "CA",
            "vital_signs/body_temperature/any_event:0/time": "2014-3-19T13:10Z",
            "vital_signs/body_temperature/any_event:0/temperature|magnitude": 37.1,
            "vital_signs/body_temperature/any_event:0/temperature|unit": "°C",
            "vital_signs/blood_pressure/any_event:0/systolic": 120,
            "vital_signs/blood_pressure/any_event:0/diastolic": 90,
            "vital_signs/height_length/any_event:0/body_height_length": 171,
            "vital_signs/body_weight/any_event:0/body_weight": 150,
            
            "vital_signs/body_temperature/any_event:1/time": "2015-3-19T13:10Z",
            "vital_signs/body_temperature/any_event:1/temperature|magnitude": 37.1,
            "vital_signs/body_temperature/any_event:1/temperature|unit": "°C",
            "vital_signs/blood_pressure/any_event:1/systolic": 120,
            "vital_signs/blood_pressure/any_event:1/diastolic": 80,
            "vital_signs/height_length/any_event:1/body_height_length": 171,
            "vital_signs/body_weight/any_event:1/body_weight": 151,
            
            "vital_signs/body_temperature/any_event:2/time": "2016-3-19T13:10Z",
            "vital_signs/body_temperature/any_event:2/temperature|magnitude": 37.1,
            "vital_signs/body_temperature/any_event:2/temperature|unit": "°C",
            "vital_signs/blood_pressure/any_event:2/systolic": 120,
            "vital_signs/blood_pressure/any_event:2/diastolic": 80,
            "vital_signs/height_length/any_event:2/body_height_length": 172,
            "vital_signs/body_weight/any_event:2/body_weight": 151              
    }
  };
  
  $.ajax({
      url: baseUrl + "/ehr",
      type: "POST",
      success: function (data) {
          ehrId = data.ehrId;
          console.log(ehrId);
          
          pdata["p" + stPacienta].partyAdditionalInfo = [
              {
                  key: "ehrId",
                  value: ehrId
              }
          ];
          
          $.ajax({
             url: baseUrl + "/demographics/party",
             type: "POST",
             contentType: "application/json",
             data: JSON.stringify(pdata["p" + stPacienta]),
             success: function(party) {
                 if (party.action == "CREATE")
                 {
                     $.ajax({
                             url: baseUrl + "/composition?" + $.param({
                                 "ehrId": ehrId,
                                 templateId: "Vital Signs",
                                 format: "FLAT",
                                 committer: "Donald Trump"
                             }),
                             type: "POST",
                             contentType: "application/json",
                             data: JSON.stringify(composition_data["p" + stPacienta]),
                             success: function(res) {
                                 if (res.action == "CREATE")
                                    console.log("Composition success: " + JSON.stringify(res));
                             }
                      });
                 }
                     
                 $("#status").html("Success");
                 $("<option value=\"" + ehrId + "\">" + pdata["p" + stPacienta].firstNames + " " + pdata["p" + stPacienta].lastNames + "</option>").appendTo("#pacienta");
            }
          });
      }
  });

  return ehrId;
}

function iskanjeEhrId(ehrid) {
    if (ehrid.length != 36)
        return;
    
    var sdata = [{ key: "ehrId", value: ehrid }];
    $.ajax({
      url: baseUrl + "/demographics/party/query",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(sdata),
      success: function(res) {
          console.log(res);
          return res.parties;
      }
    });
    
    return [];
}



// TODO: Tukaj implementirate funkcionalnost, ki jo podpira vaša aplikacija

$(document).ready(function() {
   var sessionId = getSessionId();
   $.ajaxSetup({
       headers: {
           "Ehr-session": sessionId
       }
   });
      
   $("#btngen").click(function(event) {
       generirajPodatke(1);
       generirajPodatke(2);
       generirajPodatke(3);
   });
   
   $("#btnIskanje").click(function(event) {
        iskanjeEhrId($("#ehrid").val());
   });
   
   $("#pacienta").change(function() {
       var pacienta = iskanjeEhrId($(this).val());
       console.log(pacienta);
       $.ajax({
           url: baseUrl + "/template/" + encodeURIComponent("Vital Signs") + "?" + $.param({
               "ehrId": $(this).val(),
               
           }),
           type: "GET",
           contentType: "application/json",
       })
       
   })
});

/**
 * Created by casie on 6/28/16.
 */
//Ajax
//REST - standardization of communication with server

//Get - pulls info from server
//Post - sends info to server
//Put - modifies existing file in server
//Delete - deletes file from server

//Connection between client and server

//Ajax - asynchronous javascript and xml

//Request -
//Response -

//
var imaginaryCreature = null;
var i = 0;

$(document).ready(function(){
    //click fires off function for first GET request to get the creature
    $('.clickMe').on('click',function(){
        $.get('/javascripts/data.json', function(data) {
            imaginaryCreature = data;
            console.log(imaginaryCreature);
            $(".here").append("<div><p>" + imaginaryCreature.creatures[i].name + " <button class='info' id='" + imaginaryCreature.creatures[i].id + "'>Get Info</button></p></div>");
            i++;
            if(i>= imaginaryCreature.creatures.length){
                i=0;
            }
        });
    });

    //click fires off the second GET request
    $('.here').on('click', '.info', function(){
        console.log("YUP");
       var check = $(this).attr('id');
        console.log(check);
        $(this).parent().append(check);
    });
});
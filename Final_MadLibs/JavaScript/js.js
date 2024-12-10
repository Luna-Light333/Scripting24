console.log("Squeak ;3")


function write(){

    console.log("Mroowww :D");

    var adj1 = document.getElementById('Adjective1').value;

    var Music_Genre = document.getElementById('Music_Genre').value;

    var adj2 = document.getElementById('Adjective2').value;

    var Verb1 = document.getElementById('Verb1').value;

    var Name = document.getElementById('Name').value;

    var Noun1 = document.getElementById('Noun1').value;

    var pverb = document.getElementById('Phrasal_Verb').value;

    var Verb2 = document.getElementById('Verb2').value;

    var Noun2 = document.getElementById('Noun2').value;

    var adj3 = document.getElementById('Adjective3').value;

console.log(adj1);
    console.log(Music_Genre);
    console.log(adj2);
    console.log(Verb1);
    console.log(Name);
    console.log(Noun1);
    console.log(pverb);
    console.log(Verb2);
    console.log(Noun2);
    console.log(adj3);

    var location = document.querySelector('input[name="Location"]:checked').value;

    

    var locationMessage;

    if(location=="School"){

        locationMessage = "school"

    }


    if(location=="Library"){

        locationMessage = "library"

    }


    if(location=="Beach"){

        locationMessage = "beach"

    }


    if(location=="House"){

        locationMessage = "house"

    }



    console.log(locationMessage);

    document.getElementById('output').innerHTML = "It was a similar, same old walk to "+location+" anyway, some sort of "+Music_Genre+" playing in her slightly "+Verb1+" headphones, humming softly to the words she knew by heart. They gently rubbed the left back side of their neck and checked their hand, almost as if they'd expected something to copy and paste itself right onto her hand. It didn't. Although for the walk this time, it was slightly different. "+Name+" walked near "+Noun1+", just at the entrance to their huge, menacing "+location+", where some poor kid seemed to be getting "+pverb+". They didn't even recognize any of them, but the person just… seemed to click; a "+adj1+" connection of some sort between two strangers. They approached. The other person looked "+adj2+", although a few other students too had a bit of "+Noun2+" seeping from their mouths or noses, "+Name+" couldn't help but "+Verb2+" at the "+adj3+" sight.";





}
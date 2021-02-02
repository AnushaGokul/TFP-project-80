
number_array = [];
    
function submit()
{
    display_number_array = [];

    for (var j = 1; j <= 5; j++) 
    {
        number = document.getElementById("number_"+j).value;
        console.log(number);
        number_array.push(number);
    }

    console.log(number_array);

    lenght_of_number_array = number_array.length;
    console.log(lenght_of_number_array);

    for (var k = 0; k < lenght_of_number_array; k++) 
    {
        display_number_array.push( number_array[k] );
        console.log(display_number_array);
    }

    console.log(display_number_array);
    document.getElementById("display_number_with_commas").innerHTML ="<h4> NUMBERS WITH COMMAS : " + display_number_array + "</h4>";

    remove_commas = display_number_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_number_without_commas").innerHTML = "<h4> NUMBERS WITHOUT COMMAS : " + remove_commas + "</h4>";


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_asc_button").style.display = "inline-block";
    document.getElementById("sort_desc_button").style.display = "inline-block";

}

function sorting()
{
    number_array.sort(function(a, b){return a-b});
    console.log(number_array);
    
    /* we can use directly the same array to sort also but here they have the got the values into a separate array using PUSH and got the values from there, then used JOIN function
    and then it is displayed*/

   /* name_of_the_student_array.join(" ");
    console.log(name_of_the_student_array);

    document.getElementById("display_name_without_commas").innerHTML=name_of_the_student_array;*/

    display_number_array_sorting = [];

    lenght_of_number_array = number_array.length;
    console.log(lenght_of_number_array);

    for (var k = 0; k < lenght_of_number_array; k++) 
    {
        display_number_array_sorting.push( number_array[k]) ;
        console.log(display_number_array_sorting);
    }

    remove_commas = display_number_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_number_without_commas").innerHTML =  "<h4>ASCENDING  NUMBERS WITHOUT COMMAS : " + remove_commas + "</h4>";
}

function descsorting()
{
    number_array.sort(function(a, b){return b-a});
    console.log(number_array);
    
    /* we can use directly the same array to sort also but here they have the got the values into a separate array using PUSH and got the values from there, then used JOIN function
    and then it is displayed*/

   /* name_of_the_student_array.join(" ");
    console.log(name_of_the_student_array);

    document.getElementById("display_name_without_commas").innerHTML=name_of_the_student_array;*/

    display_number_array_sorting = [];

    lenght_of_number_array = number_array.length;
    console.log(lenght_of_number_array);

    for (var k = 0; k < lenght_of_number_array; k++) 
    {
        display_number_array_sorting.push( number_array[k]) ;
        console.log(display_number_array_sorting);
    }

    remove_commas = display_number_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_number_without_commas").innerHTML =  "<h4> DESCENDING NUMBERS WITHOUT COMMAS : " + remove_commas + "</h4>";
}

//Additional activity
function new_update()
{
    document.getElementById("display_number_without_commas").innerHTML = "<h1>" + number_array +"</h1>";
}






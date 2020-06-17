
var filterType = "";       // sets the filter type to " " (will later be dog, cat or bird)
var filterAgeMin = 0;       // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE;    // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload =  loadTableWithFilters;

function loadTableWithFilters()
{
    var tbody = document.querySelector("#main-table-body");
    tbody.innerHTML = "";
    for(var i = 0; i < petData.length; i++)
    {
      
        if ( ( filterType == petData[i].type || filterType == "") && (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax) )
        {
               var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var img = document.createElement("img");
                var td2 = document.createElement("td");
                var h4 = document.createElement("h4");
                var p = document.createElement("p");
                var span = document.createElement("span");

                img.src = petData[i].image.src;
                img.alt = petData[i].image.alt;
                img.height = petData[i].image.height;
                img.width = petData[i].image.width;
                td1.appendChild(img);
                
                var text = document.createTextNode(petData[i].name);
                h4.appendChild(text);
                p.innerHTML = petData[i].description;
                
                var age = petData[i].age + " ";
                var age1 = "Age : " + age + "years old.";
                var age2 = document.createTextNode(age1);                
                
                span.appendChild(age2);
                td2.appendChild(h4);
                td2.appendChild(p);
                td2.appendChild(span);
                tr.appendChild(td1);
                tr.appendChild(td2);
                
                tbody.appendChild(tr);
            }
        }
    }

function filterDog()
{
    filterType = "dog";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
function filterCat()
{
    filterType = "cat";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
function filterBird()
{
    filterType = "bird";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filter_zero_1()
{
    filterType = "";
    filterAgeMax = 1;
    filterAgeMin = 0;
    loadTableWithFilters();
}
function filter_1_3()
{
    filterType = "";
    filterAgeMax = 3;
    filterAgeMin = 1;
    loadTableWithFilters();
}
function filter_4_plus()
{
    filterType = "";
    filterAgeMax = Number.MAX_VALUE;
    filterAgeMin = 4;
    loadTableWithFilters();
}
function filterAllPets()
{
    filterType = "";
    filterAgeMax = Number.MAX_VALUE;
    filterAgeMin = 0;
    loadTableWithFilters();
}
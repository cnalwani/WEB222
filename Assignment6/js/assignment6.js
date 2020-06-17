// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload = function()
{
	makeRequest(1);
}

	function makeRequest(pageNum) 
	{
	
		// TODO: create a variable "url" to store the request to 
		// the current pageNum, ie:
		// 		"https://reqres.in/api/users?page=1" // for page 1
		// 		"https://reqres.in/api/users?page=2" // for page 2
		// 		etc...
		var url;
		
		url = "https://reqres.in/api/users?page=" + pageNum;

		// make an HTTP request object
		httpRequest = new XMLHttpRequest();

		// execute the "showContents" function when
		// the httprequest.onreadystatechange event is fired
		httpRequest.onreadystatechange = showContents;
		
		// open a asynchronous HTTP (GET) request with the specified url
		httpRequest.open('GET', url, true);
		
		// send the request
		httpRequest.send();
	}


// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) 
	{

		// check the response code
		if (httpRequest.status === 200)
		{ 

			// The request has succeeded
		    // Just for debugging. 
		    console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"

				var tablecontainer = document.querySelector("#data");
				tablecontainer.innerHTML = "";
				for(var i = 0; i < jsData.data.length; i++)	
				{
							
						var tr1 = document.createElement("tr");
						var td1 = document.createElement("td");
						var td2 = document.createElement("td");
						var td3 = document.createElement("td");
						var td4 = document.createElement("td");
			
						var id = document.createTextNode(jsData.data[i].id);
						var f_name = document.createTextNode(jsData.data[i].first_name);
						var l_name = document.createTextNode(jsData.data[i].last_name);
						var img = document.createElement("img");
						img.src = jsData.data[i].avatar;
						
						td1.appendChild(id);
						td2.appendChild(f_name);
						td3.appendChild(l_name);
						td4.appendChild(img);
						
						tr1.appendChild(td1);				
						tr1.appendChild(td2);
						tr1.appendChild(td3);
						tr1.appendChild(td4);

						tablecontainer.appendChild(tr1);
				}
		} 
		else
		{
			console.log('There was a problem with the request.');
		}
	}
}	
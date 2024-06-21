function sumit_button(){
    const xhr= new XMLHttpRequest()
	const movieName=document.querySelector("#ID_input").value;
	const url=" http://www.omdbapi.com/?t="+movieName+"&apikey=972e603c";
    xhr.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			const data=this.responseText;
			const json=JSON.parse(data);
			console.log(json);
			const Titel=json.Title;
			const Language=json.Language;
			const Director=json.Director;
			const Year=json.Year;
			const Country=json.Country;
			const Actors=json.Actors;
			document.getElementById("Movie_Title").innerHTML="Movie_Title:-"+Titel;
			document.getElementById("Movie_Language").innerHTML="Movie_Language:-"+Language;
			document.getElementById("Movie_Director").innerHTML="Movie_Director:-"+Director;
			document.getElementById("Movie_Year").innerHTML="Movie_Year:-"+Year;
			document.getElementById("Movie_Country").innerHTML="Movie_Country:-"+Country;
			document.getElementById("Movie_Actors").innerHTML="Movie_Actors:-"+Actors;
		}	
	}
	xhr.open("GET",url,true);
	xhr.send();
}
// 1-readyState hold karik rakhib ta XMLHttpRequest status ku.
// 2-onreadystatechange ea function difine kariba jetebele readyState proporty chenge  haba.
// 3-status 200 response or 404 error.
// 4-new XMLHttpRequest create kare nua request.
// 5-responseText return kare server response.
// 6-parse js value au object described kare string re.
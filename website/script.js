async function updateVisitorCount(){
    const apiUrl = "https://flgl7tbpcl.execute-api.us-east-1.amazonaws.com/prod/visitorCounter";
    try{
        // const response = await fetch(apiUrl);
        await fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => document.getElementById("visitor_count").innerText = json)
        //document.getElementById("visitor_count").innerText =response.json();
    }
    catch(error){
        console.error("Error fetching visitor count: ", error);
    }
}
document.addEventListener("DOMContentLoaded", updateVisitorCount);
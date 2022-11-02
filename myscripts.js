<body onload="updateCounter()">
    <script>
function updateCounter(){
    fetch('https://vamzxh0jag.execute-api.ca-central-1.amazonaws.com/prod',{
        method: 'GET'
    })
  .then(response => {
    if (
        // check if response's status is 200
        response.ok
    ) {
      return response.json()
    } else {
      throw new Error('something went wrong');
    }
  })
  .then(data => document.getElementById("hits").innerText = data.Visit_Count)
}
</script>
    Visits: <span id="hits"></span>

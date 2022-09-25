 async function battery() {
    
    var batteryOverview = document.getElementById('battery-overview');
    if(batteryOverview.style.display == 'none') {
        batteryOverview.style.display = 'block';
    }
    else{
        batteryOverview.style.display = 'none';
    }
    
    let batteryInfo = await navigator.getBattery();
    console.log(batteryInfo.level);
    document.querySelector('#battery-percentage').innerHTML = (batteryInfo.level * 100) + '%'
    var batteryI = (batteryInfo.level * 100);
    document.querySelector('#charging').innerHTML = batteryInfo.charging ? "Charging" : "Not charging";

    document.querySelector('#progress').innerHTML = `<progress max="100" value="${batteryI}"></progress>`
 
 }
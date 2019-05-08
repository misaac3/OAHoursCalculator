
makeBtns = () => {
    shiftGroups.forEach((arr, i) => {
        let bg = document.createElement("div")
        document.querySelector("#btnGroupRoot").appendChild(bg)
        bg.outerHTML = ` <div class="btn-group col-12 mb-4" role="group" id="btnGroup${i}"> </div>`;
        Object.keys(arr).forEach((x) => {
            let btnGroup = document.querySelector(`#btnGroup${i}`)
            let node = document.createElement("div")
            btnGroup.appendChild(node)
            node.outerHTML = `<div class=' btn btn btn-primary mr-1' onClick='Add(${x})' id='${x}'>${x}</div>`

        })
    })

}
Add = (e) => {
    // console.log(e.id);
    totalHours += shiftToHours[e.id]
    document.querySelector("#hours").innerHTML = totalHours
    let node = document.createElement("LI")
    node.innerHTML = e.id + " (" + shiftToHours[e.id] + " hours)"
    document.querySelector("#list").appendChild(node)


}

document.getElementById("clear").addEventListener('click', () => {
    totalHours = 0
    document.querySelector("#hours").innerHTML = 0
    document.querySelector("#list").innerHTML = ""


})



makeBtns()

totalHours = 0;
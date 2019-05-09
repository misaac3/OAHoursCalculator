
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
    node.innerHTML = e.id + " (" + shiftToHours[e.id] + " hours)" +
        `<div class="btn btn-danger" id=shift${id} onClick=deleteShift(${e.id}, ${id})">Delete Shift<div/>`
    document.querySelector("#list").appendChild(node)
    id++;


}

deleteShift = (shift, id) => {
    total -= shiftToHours[shift]
    let ht = document.querySelector("#shift" + id).outerHTML
    document.querySelector("#shift" + id).outerHTML = "<strike>" + ht + "</strike>"

}

document.getElementById("clear").addEventListener('click', () => {
    totalHours = 0
    document.querySelector("#hours").innerHTML = 0
    document.querySelector("#list").innerHTML = ""
    id = 0;


})


let id = 0
makeBtns()

totalHours = 0;
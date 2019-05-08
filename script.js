btnArr =
    [
        {
            T1: 7,
            T2: 8.5,
            T3: 5,
            T4: 3,
            T5: 4.5,
            T6: 4.5,
        },
        {
            FA1: 6,
            FA2: 9,
            FA3: 8,
            FA4: 7,
            FA5: 8.5,
            FA6: 7,
            FA7: 5,
            FA8: 8.5,
            FA9: 3,
        },
        {
            FB1: 6,
            FB2: 6,
            FB3: 5,
            FB4: 5,
            FB5: 5,
            FB6: 0,
        },
        {
            F1: 7,
            F2: 9,
            F3: 7,
            F4: 7.25,
            F5: 8.5,
            F6: 8.5,
            F7: 7,
            F8: 6
        }
    ]

let shiftToHours =

{
    T1: 7,
    T2: 8.5,
    T3: 5,
    T4: 3,
    T5: 4.5,
    T6: 4.5,

    FA1: 6,
    FA2: 9,
    FA3: 8,
    FA4: 7,
    FA5: 8.5,
    FA6: 7,
    FA7: 5,
    FA8: 8.5,
    FA9: 3,

    FB1: 6,
    FB2: 6,
    FB3: 5,
    FB4: 5,
    FB5: 5,
    FB6: 0,

    F1: 7,
    F2: 9,
    F3: 7,
    F4: 7.25,
    F5: 8.5,
    F6: 8.5,
    F7: 7,
    F8: 6


}
makeBtns = () => {
    // console.log(btnGroup);

    btnArr.forEach((arr, i) => {
        console.log(arr, i);
        Object.keys(arr).forEach((x) => {
            let btnGroup = document.querySelector(`#btnGroup${i}`)

            let node = document.createElement("div")
            btnGroup.appendChild(node)
            node.outerHTML = `<div class=' btn btn btn-primary m-1' onClick='Add(${x})' id='${x}'>${x}</div>`
            console.log(node);
        })
    })

}
makeBtns()

totalHours = 0;

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
const myGlobal = 0

function newFn() {
    const myNumber = 1
    console.log(myGlobal)

    function parent(){
        const inner = 2
        console.log(myNumber)
        console.log(myGlobal)

        function child(){
            console.log(inner)
            console.log(myNumber)
            console.log(myGlobal)
        }
        return child()
    }
    return parent()
}

newFn()
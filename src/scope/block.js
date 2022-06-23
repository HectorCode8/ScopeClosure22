function fruits() {
    if(true) {
        var fruit1 = 'apple' // function scope
        let fruit2 = 'kiwi' // let is block scoped
        const fruit3 = 'banana' // const is block scoped
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}
fruits()
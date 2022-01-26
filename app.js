function countBoomerangs(input) {
    let count = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 2] && input[i] !== input[i + 1]) {
            count++
        }
    }
    console.log(count)
}

countBoomerangs([9, 5, 9, 5, 1, 1, 1])



countBoomerangs([5, 6, 6, 7, 6, 3, 9])



countBoomerangs([4, 4, 4, 9, 9, 9, 9])



countBoomerangs([1, 7, 1, 7, 1, 7, 1])
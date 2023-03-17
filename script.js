const data = {
    first: ["elephant", "wolf", "lion", "deer", "human", "girlfriend", ],
    second: ["a knife", "a hammer", "flowers", "a condom", "money"],
    third: ["run", "marry", "obey", "scream", "kiss"]
}


const randomPicker = (word) => {
    let randomIndex = Math.floor(Math.random() * word.length)
    return word[randomIndex]  
}

function funMessage() {
    const firstWord = randomPicker(data.first)
    const secondWord = randomPicker(data.second)
    const thirdWord = randomPicker(data.third)
    console.log(`if you see ${firstWord} with ${secondWord} all you can do is ${thirdWord}`)
}

funMessage()
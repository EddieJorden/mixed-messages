const nounsArray = [
    'dog',
    'cat',
    'bench',
    'car',
    'office',
]

const verbsArray = [
    'jump',
    'move',
    'act',

]

const adjectivesArray = [
    'clean',
    'amazing',
    'perfect',
    'literally',
]

const stringsArray = [

]

const randomNoun = () => {
    let randomNumber = Math.floor(Math.random() * nounsArray.length)
    return nounsArray[randomNumber]
}

const randomVerb = () => {
    let randomNumber = Math.floor(Math.random() * verbsArray.length)
    return verbsArray[randomNumber]
}

const randomAdjective = () => {
    let randomNumber = Math.floor(Math.random() * adjectivesArray.length)
    return adjectivesArray[randomNumber]
}

let selectedNoun = randomNoun()
let selectedVerb = randomVerb()
let selectedAdjective = randomAdjective()

const randomMessageGenerator = (adjective, noun, verb,  string) => {
    randomMessage = `The ` +adjective+ ' ' +noun+ ' ' +verb+ ` stuff`
    return randomMessage
}




console.log(randomMessageGenerator(selectedAdjective, selectedNoun, selectedVerb))
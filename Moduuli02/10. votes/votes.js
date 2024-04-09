const numOfCandidate = parseInt(prompt('Enter number of candidates'));
const candidates = [];

for (let i = 1; i < numOfCandidate + 1; i++) {
  candidates.push({name: prompt(`Enter name for candidate ${i}`), votes: 0});
}

const numOfVoters = parseInt(prompt('Enter number of voters'));

for (let i = 0; i < numOfVoters; i++) {
  let vote = prompt('Enter name of candidate');

  for (let j = 0; j < numOfCandidate; j++) {
    if (candidates[j].name === vote) {
      candidates[j].votes++;
    }
  }
}

candidates.sort((a, b) => a.votes - b.votes).reverse();

console.log(`Winner is ${candidates[0].name} with ${candidates[0].votes}`);
console.log('result:');
candidates.forEach(
    (candidate) => console.log(`${candidate.name}: ${candidate.votes} votes`));
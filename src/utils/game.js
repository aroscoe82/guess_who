export class game{
  constructor(){
    this.levels = {
      'muggle': {
        code: 0,
        label: 'Muggle',
        time: 90 ,// seconds
        clues: ['patronus', 'wand', 'boggart', 'bloodStatus'],
        randomCharacter: () => {
          let mainCharacters = this.getMainCharacters();
          return mainCharacters[Math.floor(Math.random() * mainCharacters.length)]
        }
      },
      'wizard': {
        code: 1,
        label: 'Wizard',
        time: 60, // seconds
        clues: [ 'house', 'bloodStatus', 'orderOfThePhoenix'],
        randomCharacter: () => {
          let studentCharacters = this.getStudentCharacters();
          return studentCharacters[Math.floor(Math.random() * studentCharacters.length)]
        }
      },
      'auror': {
        code: 2,
        label: 'Auror',
        time: 60, // seconds
        clues: [ 'house', 'bloodStatus', 'orderOfThePhoenix'],
        randomCharacter: () => {
          return this.characterList[Math.floor(Math.random() * this.characterList.length)]
        }
      }
    }
    this.characterList = [];
  }

  getLevels(){
    return this.levels;
  }

  getLevelDetail(level){
    return this.levels[level];
  }

  setCharacters(characters){
    this.characterList = characters;
  }

  getAllCharacters(){
    return this.characterList;
  }

  getStudentCharacters(){
    return this.characterList.filter(character => (
      character.role === 'student'
    ));
  }

  getMainCharacters(){
    let mainCharacters = [
      'Harry Potter', 'Ronald Weasley', 'Hermione Granger', 'Neville Longbottom', 'Luna Lovegood'
    ];

    return this.characterList.filter((character) => {
      return mainCharacters.includes(character.name);
    });
  }
}
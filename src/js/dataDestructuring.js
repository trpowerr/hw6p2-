import data from './destructuring';

export default function dataDestructuring () {
    for (let props in data) {
      if (props == 'special') {
        const {special: [{id, name, icon, description = 'Засекречено'}]} = data;  
        // console.log(id, name, icon, description);
        return {id, name, icon, description};
      }
    }
}
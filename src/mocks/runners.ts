import { runnerType } from './../types/index';


export const getRunners = (): Array<runnerType> =>{
    return [
        { id: 1, names: 'Luis Daniel', lastNames: 'Hernandez Jedaidas', photo:'photo1', age: 23, weight: 65, height: 192, birthday:'19/01/2000',ailments:'dsada' },
        { id: 2, names: 'Juan Carlos', lastNames: 'Garcia Pérez', photo:'photo2', age: 25, weight: 70, height: 185, birthday:'20/02/1999',ailments:'dsada' },
        { id: 3, names: 'Maria Jose', lastNames: 'Rodriguez Jimenez', photo:'photo3', age: 30, weight: 75, height: 170, birthday:'15/03/1998',ailments:'dsada' },
        { id: 4, names: 'Andres Felipe', lastNames: 'Lopez Ortiz', photo:'photo4', age: 27, weight: 80, height: 180, birthday:'12/04/1997',ailments:'dsada' },
        { id: 5, names: 'Sofia Alejandra', lastNames: 'Gomez Mendoza', photo:'photo5', age: 20, weight: 55, height: 160, birthday:'09/05/2000',ailments:'dsada' },
        { id: 6, names: 'Diego Armando', lastNames: 'Sánchez Castro', photo:'photo6', age: 32, weight: 85, height: 190, birthday:'06/06/1995',ailments:'dsada' }
    ]
}
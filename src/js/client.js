/* 
    Universidad del Valle de Guatemala
    Sistemas y Tecnologias Web
    I Semestre 2020
    Nombre: Diana Ximena de Leon Figueroa
    Carne: 18607
    Fecha: 30/01/2020   
*/
/*const renderLuz = ({
    color,
    size = 200,
    isTurnedOn = false,
}) => {
    const luz = document.createElement('div');
    luz.style.width = `${size}px`;
    luz.style.height = `${size}px`;
    luz.style.borderRadius = `${size / 2}px`;
    luz.style.backgroundColor = color;
    luz.style.opacity = isTurnedOn ? 1.0 : 0.25;
    return luz;
}


const render = (mount, state) => {
    const { turnedOnIndex } = state;

    const semaforo = document.createElement('div');
    semaforo.style.backgroundColor = 'black';
    semaforo.style.width = '200px';
    semaforo.style.padding = '25px';
    /*[
        'red',
        'yellow',
        'green'
    ].map(
        (color, index) => renderLuz({
            color,
            isTurnedOn: index === turnedOnIndex,
        }),
    ).forEach(
        luz => semaforo.appendChild(luz),
    );

    const boton = document.createElement('button');
    boton.style.width = '250px';
    boton.style.fontSize = '20px';
    boton.innerText = 'Siguiente';

    boton.onclick = () => {
        state.turnedOnIndex = (state.turnedOnIndex + 1) % 3;
        root.innerHTML = '';
        render(root, state);
    };

    mount.appendChild(semaforo);
    //mount.appendChild(boton);
};


const APP_STATE = {
    turnedOnIndex: 1,
};

const root = document.getElementById('root');

render(root, APP_STATE);*/


const renderCasilla = ({
    celda,
    iFila,
    iColumna,
    size = 50,
}) => {
    const casilla = document.createElement('button');
    casilla.style.width = `${size}px`;
    casilla.style.height = `${size}px`;
    casilla.style.borderColor = '#000000';
    casilla.style.backgroundColor = '#317520';
    casilla.style.borderRadius = `${size/10}px`;
    const ficha = document.createElement('div');
    ficha.style.width = `${size-15}px`;
    ficha.style.height = `${size-15}px`;
    if(celda === 1){
        ficha.style.backgroundColor = '#000000';
        ficha.style.borderRadius = `${size/2}px`;
        casilla.appendChild(ficha);
    }
    if(celda === -1){
        ficha.style.backgroundColor = '#FFFFFF';
        ficha.style.borderRadius = `${size/2}px`;
        casilla.appendChild(ficha);
    }
    return casilla;
}
    

const render = (mount, state) => {

    const { Turn, Board} = state;
    const tablero = document.createElement('div');
    tablero.style.backgroundColor = '#317520';
    tablero.style.width = '410px';
    tablero.style.padding = '25px';

    state.Board.map((fila, iFila) => fila.map((celda, iColumna) => renderCasilla({celda, iFila, iColumna})).forEach(casilla => tablero.appendChild(casilla)));
    
    mount.appendChild(tablero);
};

const APP_STATE = {
    Turn: true,
    Board: [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,-1,1,0,0,0],
            [0,0,0,1,-1,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            ],
}

const root = document.getElementById('root');

render(root, APP_STATE);
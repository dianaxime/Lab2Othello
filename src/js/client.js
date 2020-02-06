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

/* Estados: 
        
        Blancas : -1
        Negras  :  1

*/

const revisar = function ({Board, row, column, positions}){

}
const renderCasilla = ({
    celda,
    iFila,
    iColumna,
    root,
    APP_STATE,
    size = 50,
}) => {
    const {Turn, Board} = APP_STATE;
    //Crea la casilla
    const casilla = document.createElement('button');
    casilla.style.width = `${size}px`;
    casilla.style.height = `${size}px`;
    casilla.style.borderColor = '#000000';
    casilla.style.backgroundColor = '#00b75b';
    casilla.style.borderRadius = `${size/10}px`;
    const ficha = document.createElement('div');
    ficha.style.width = `${size-15}px`;
    ficha.style.height = `${size-15}px`;
    //Le da el estilo correspondiente si esta posicionada una ficha blanca
    if(celda === 1){
        ficha.style.backgroundColor = '#000000';
        ficha.style.borderRadius = `${size/2}px`;
        casilla.appendChild(ficha);
    }
    //Le da el estilo correspondiente si esta posicionada una ficha negra
    if(celda === -1){
        ficha.style.backgroundColor = '#FFFFFF';
        ficha.style.borderRadius = `${size/2}px`;
        casilla.appendChild(ficha);
    }
    //Si esta vacia y el usuario presiona esa casilla
    if (celda === 0){
        casilla.onclick = () => {
            if (Turn){
                Board[iFila][iColumna] = 1;
                APP_STATE.Turn = !Turn;
                root.innerHTML = '';
                render(root, APP_STATE);
            }
            else if (!Turn){
                Board[iFila][iColumna] = -1;
                APP_STATE.Turn = !Turn;
                root.innerHTML = '';
                render(root, APP_STATE);
            }
        }
    }
    return casilla;
}
    

const render = (mount, state) => {

    const { Turn, Board} = state;

    mount.style.backgroundColor = '#ecd67b';
    mount.style.padding = '25px';

    const info = document.createElement('div');
    info.style.minWidth = '410px';
    info.style.display = 'flex';
    info.style.flexDirection = 'column';
    info.style.alignItems = 'center';

    //Titulo
    const title = document.createElement('h1');
    title.innerText = 'Play Othello';
    title.style.fontSize = '48px';
    title.style.fontFamily= 'sans-serif';

    const state_game = document.createElement('div');
    state_game.style.minWidth = '410px';
    state_game.display = 'flex';
    state_game.style.flexDirection = 'row';
    state_game.style.alignItems = 'center';
    state_game.style.backgroundColor = '#ecd67b';
    state_game.style.borderStyle = 'dashed';
    state_game.style.borderSize = '2px';

    //Cuenta la cantidad de fichas de cada color
    let cuenta_blancas = 0;
    let cuenta_negras = 0;

    state.Board.map((fila, iFila) => fila.map((celda, iColumna) => {
        if (celda === -1){
            cuenta_blancas += 1;
        }
        if (celda === 1){
            cuenta_negras += 1;
        }
    }));

    //Muestra la cantidad de fichas por color
    const state_white = document.createElement('div');
    state_white.style.padding = '5px';
    state_white.style.display = 'flex';
    state_white.style.flexDirection = 'row';
    const whites = document.createElement('h3');
    whites.innerText = "Cant. Blancas:"
    const c_whites = document.createElement('h3');
    c_whites.innerText = cuenta_blancas;
    c_whites.style.paddingLeft = '5px';
    whites.style.paddingLeft = '25px';

    state_white.appendChild(whites);
    state_white.appendChild(c_whites);


    const state_black = document.createElement('div');
    state_black.style.padding = '5px';
    state_black.style.display = 'flex';
    state_black.style.flexDirection = 'row';
    const blacks = document.createElement('h3');
    blacks.innerText = "Cant. Negras:"
    const c_blacks = document.createElement('h3');
    c_blacks.innerText = cuenta_negras;
    c_blacks.style.paddingLeft = '5px';
    blacks.style.paddingLeft = '75px';

    //Muestra el turno del jugador
    const info_turno = document.createElement('div');
    info_turno.style.alignItems = 'center';
    info_turno.style.display = 'flex';
    info_turno.style.flexDirection = 'row';
    const turno_turno = document.createElement('h2');
    const turno_player = document.createElement('h2');
    turno_turno.style.paddingLeft = '100px';
    turno_player.style.paddingLeft = '25px';

    const player_turn = (Turn) ? 'Jugador 1' : 'Jugador 2';

    turno_turno.innerText = "Turno:";
    turno_player.innerText = player_turn;

    info_turno.appendChild(turno_turno);
    info_turno.appendChild(turno_player);

    state_white.appendChild(blacks);
    state_white.appendChild(c_blacks);

    state_game.appendChild(state_white);
    state_game.appendChild(info_turno);
    state_game.appendChild(state_black);

    info.appendChild(title);
    info.appendChild(state_game);

    //Muestra el tablero
    const tablero = document.createElement('div');
    tablero.style.backgroundColor = '#00b75b';
    tablero.style.width = '410px';
    tablero.style.margin = '10px';
    tablero.style.padding = '25px';
    tablero.style.borderRadius = '5px';

    state.Board.map((fila, iFila) => fila.map((celda, iColumna) => renderCasilla({celda, iFila, iColumna, root, APP_STATE})).forEach(casilla => tablero.appendChild(casilla)));
    
    info.appendChild(tablero);
    mount.appendChild(info);
    
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

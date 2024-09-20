const botao = document.querySelectorAll('button');
const visor = document.querySelector('#visor');

let last_digit;
let hasPonto = false;

botao.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'limpar') {
            visor.innerText = '';
            hasPonto = false
        } else if (item.id === 'remover') {
            let stringVisor = visor.innerText.toString();
            visor.innerText = stringVisor.substring(0, stringVisor.length - 1)
        } else if (item.id == '-' && visor.innerText == '') {
            visor.innerText += item.id
        } else if (item.className == 'bt-operador' && (last_digit == 'bt-operador' || visor.innerText == '')) {

        } else if (item.className == 'bt-expo' && hasPonto == true) {

        } else if (item.id == 'igual' && visor.innerText == '') {
            visor.innerText = 'Erro'
            setTimeout(() => (visor.innerText = ''),300)
        } else if (item.id == 'igual' && visor.innerText != '') {
            visor.innerText = eval(visor.innerText)
            hasPonto = true
        } else {
            visor.innerText += item.id
            if (item.id == '.') {
                hasPonto = true
            } else if (item.className == 'bt-operador') {
                hasPonto = false
            }
        }
        last_digit = item.className
        console.log(last_digit)
    }
})
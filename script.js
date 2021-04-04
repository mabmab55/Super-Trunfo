var cartaTsuyu = {
  nome: "Tsuyu Asui",
  imagem: "https://i.pinimg.com/originals/60/7e/cf/607ecf610321e9a406c93cdca477d290.jpg",
  atributos:{
    Power: 3,
    Speed: 4,
    Technique: 5,
    Intelligence: 5,
  }
}

var cartaTenya = {
  nome: "Tenya Ida",
  imagem: "http://pm1.narvii.com/7357/779ca46d13e09231a2879d71b56414ca3ed5159dr1-400-400v2_00.jpg",
  atributos:{
    Power: 5,
    Speed: 6,
    Technique: 3,
    Intelligence: 4,
  }
}

var cartaOchaco = {
  nome: "Ochaco Uraraka",
  imagem: "https://64.media.tumblr.com/477350b2b6648694e824b09f03fadad8/dd32c3e3d5586357-23/s250x400/f8e7125fb0ad053ee1a1c9a17c54122b8f69819d.png",
  atributos:{
    Power: 4,
    Speed: 4,
    Technique: 5,
    Intelligence: 4,
  }
}

var cartaEijiro = {
  nome: "Eijiro Kirishima",
  imagem: "https://pbs.twimg.com/media/EWormI5WoAAoami.jpg",
  atributos:{
    Power: 5,
    Speed: 3,
    Technique: 2,
    Intelligence: 3,
  }
}

var cartaIzuku = {
  nome: "Izuku Midoriya",
  imagem: "https://i.pinimg.com/736x/c7/c4/e7/c7c4e71020be87de566a66c20f86f7a6.jpg",
  atributos:{
    Power: 5,
    Speed: 5,
    Technique: 5,
    Intelligence: 5,
  }
}

var cartaKatsuki = {
  nome: "Katsuki Bakugo",
  imagem: "https://64.media.tumblr.com/199311b41790b1f62c9651578932e29b/c0a5812eb19caf8b-e4/s640x960/e6a0f161e7fccced8442372fbb01c5fec4dca2cb.jpg",
  atributos:{
    Power: 5,
    Speed: 5,
    Technique: 5,
    Intelligence: 5,
  }
}

var cartaShoto = {
  nome: "Shoto Todoroki",
  imagem: "https://64.media.tumblr.com/4c82ec2380a83b968d33a10d2e84cba6/d33feddea732d988-32/s1280x1920/0cca1013bd77e58280a037d3b0fd0596d491b1f4.jpg",
  atributos:{
    Power: 6,
    Speed: 5,
    Technique: 4,
    Intelligence: 4,
  }
}

var x = 0
var cartas = [cartaShoto, cartaKatsuki, cartaIzuku, cartaEijiro, cartaOchaco, cartaTenya, cartaTsuyu]
var cartaMaquina
var cartaJogador

function sortearCarta() {
  var cartaAleatoria1 = parseInt(Math.random() * 7)
  cartaMaquina = cartas[cartaAleatoria1]
  
  var cartaAleatoria2 = parseInt(Math.random() * 7)
  while (cartaAleatoria2 == cartaAleatoria1) {
    cartaAleatoria2 = parseInt(Math.random() * 7)
  }
  cartaJogador = cartas[cartaAleatoria2]
  
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  
  exibirOpcoes()
  mostrarCartaJogador()
  if (x > 0) {
    limparImagem()
    limparResultado()
  }
}

function jogar() {
  var atributoSelecionado = obterAtributoSelecionado()
  var resultado = document.getElementById("resultado")
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    resultado.innerHTML = "Você Venceu!!!"
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    resultado.innerHTML = "Você Perdeu!!"
  } else {
    resultado.innerHTML = "Empate!!!"
  }
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled = true
  mostrarCartaMaquina()
  x = x + 1
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obterAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo")
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function mostrarCartaJogador() {
  var imagemCartaJogador = document.createElement("img")
  imagemCartaJogador.setAttribute("src", cartaJogador.imagem)
  imagemCartaJogador.setAttribute("width", "200")
  imagemCartaJogador.setAttribute("height", "200")
  imagemCartaJogador.setAttribute("id", "limpar")
  imagemCartaJogador.style.padding = "20"
  var pImg = document.getElementById("imagem")
  pImg.appendChild(imagemCartaJogador)
  var nomeCartaJogador = document.getElementById("nome")
  nomeCartaJogador.innerHTML = cartaJogador.nome
  var powerCartaJogador = document.getElementById("power")
  powerCartaJogador.innerHTML = "Power: " + cartaJogador.atributos.Power
  var speedCartaJogador = document.getElementById("speed")
  speedCartaJogador.innerHTML = "Speed: " + cartaJogador.atributos.Speed
  var techniqueCartaJogador = document.getElementById("technique")
  techniqueCartaJogador.innerHTML = "Technique: " + cartaJogador.atributos.Technique
  var intelligenceCartaJogador = document.getElementById("intelligence")
  intelligenceCartaJogador.innerHTML = "Intelligence: " + cartaJogador.atributos.Intelligence
  
}

function mostrarCartaMaquina() {
  var imagemCartaMaquina = document.createElement("img")
  imagemCartaMaquina.setAttribute("src", cartaMaquina.imagem)
  imagemCartaMaquina.setAttribute("width", "200")
  imagemCartaMaquina.setAttribute("height", "200")
  imagemCartaMaquina.setAttribute("id", "limparM")
  imagemCartaMaquina.style.padding = "20"
  var pImg = document.getElementById("imagemM")
  pImg.appendChild(imagemCartaMaquina)
  var nomeCartaMaquina = document.getElementById("nomeM")
  nomeCartaMaquina.innerHTML = cartaMaquina.nome
  var powerCartaMaquina = document.getElementById("powerM")
  powerCartaMaquina.innerHTML = "Power: " + cartaMaquina.atributos.Power
  var speedCartaMaquina = document.getElementById("speedM")
  speedCartaMaquina.innerHTML = "Speed: " + cartaMaquina.atributos.Speed
  var techniqueCartaMaquina = document.getElementById("techniqueM")
  techniqueCartaMaquina.innerHTML = "Technique: " + cartaMaquina.atributos.Technique
  var intelligenceCartaMaquina = document.getElementById("intelligenceM")
  intelligenceCartaMaquina.innerHTML = "Intelligence: " + cartaMaquina.atributos.Intelligence
  
}

function limparImagem() {
  var limparJogador = document.getElementById("limpar")
  var limparMaquina = document.getElementById("limparM")
  var limparCartaMaquina = document.getElementById("mostrarCartaMaquina")
  limparJogador.remove()
  limparMaquina.remove()
  limparCartaMaquina.innerHTML= '<p id="imagemM"> </p><p id="nomeM"> </p> <p id="powerM"> </p> <p id="speedM"> </p> <p id="techniqueM"> </p> <p id="intelligenceM"> </p>'
}

function limparResultado() {
  var limparResultado = document.getElementById("resultado")
  limparResultado.innerHTML = ''
}
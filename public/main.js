var socket = io();

const data = {
  box1: null,
  box2: null,
  totalWeight: '0',
  rfid: 'N/A'
};

const App = new Vue({
  el: '#app',
  data: data
})

const convertToBinary = d => Boolean(Number(d))

const getWeight = (box1, box2) => {
  let weight = 0;
  if (box1) {
    weight += 2
  }
  if (box2) {
    weight += 3
  }
  return weight
}

socket.on('state-change', newState => {
  console.log(newState)
  newState.box1 = convertToBinary(newState.box1)
  newState.box2 = convertToBinary(newState.box2)
  newState.totalWeight = getWeight(newState.box1, newState.box2)
  Object.assign(data, newState)
});

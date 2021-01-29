document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
  let riddle1 = ''
  let riddle2 = ''
  riddle1 = document.getElementById('my-text').value
  riddle2 = document.getElementById('my-text2').value
  if ((riddle1 === 'david') && (riddle2 === 'penny')) {
    alert('100/100 Congratulations! You got all the answers right! GREAT JOB :)')
  } else {
    alert(' 0/100 ohhh dear sorry but you have failed :(')
  } alert('If you passed congratulations your done but if you didnt then: if at first you dont suceed try try again or this fate is guaranteed')
}

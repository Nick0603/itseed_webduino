var servo;


boardReady({board: 'Smart', device: '10ywpNaV', transport: 'mqtt'}, async function (board) {
  board.systemReset();
  board.samplingInterval = 50;
  servo = getServo(board, 14);
  document.getElementById('connected-label').innerHTML = '連線成功！';
  servo.angle = 180;
  document.getElementById("action-btn").addEventListener("click",async function(){
    servo.angle = 0;
    await delay(1);
    servo.angle = 180;
  });
  
  board.on('error', function (err) {
    board.error = err;
    document.getElementById('connected-label').innerHTML = '斷線！ 請重新整理頁面';
  });
});

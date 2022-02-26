
var _InitString;
var _OriginString;


function InitHangul(str) 
{
  cho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
  result = "";
  for(i=0;i<str.length;i++) {
    code = str.charCodeAt(i)-44032;
    if(code>-1 && code<11172) result += cho[Math.floor(code/588)];
    else result += str.charAt(i);
  }
  return result;
}

function btnSend_OnClick()
{
  _OriginString = document.getElementById("txtOrigin").value;
  _InitString = InitHangul(_OriginString);

  document.getElementById("txtResult").value = _InitString;
  window.scrollTo(0,document.body.scrollHeight);
}
  
function txtResult_OnKeyPress(e)
{
  if(e.code == 'Enter')
  {
    var txtResult = document.getElementById("txtResult");
    var start = txtResult.selectionStart;
    var finish = txtResult.selectionEnd;

    var sResult = txtResult.value;

    var sNew = '';

    for(var i = 0; i < sResult.length; i++)
    {
      if(start <= i && i < finish)
      {
        sNew += _OriginString[i];
      }
      else
      {
        sNew += sResult[i];
      }
    }

    document.getElementById("txtResult").value = sNew;
  }
}

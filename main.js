// function getInputValue(input) {
//   var inputVal = document.getElementById(input).value;
// }
//
// function hasParameters(url) {
//   url.includes('?')
// }


function addUrlDecorator() {
  var connector,
      url = document.getElementById('url-input').value;
  if ( url.includes('?') ) {
    connector = '&'
  } else {
    connector = '?'
  };
  return url + connector
}

function addAcSource() {
  var utmAc = document.getElementById('ac-input').value;
  if (utmAc != '') {
    return 'reserved_appeal_code=' + utmAc.split(' ').join('&')
  } else {
    return ''
  }
}

function addUtmSource() {
  var utmSource = document.getElementById('source-input').value;
  if (utmSource != '') {
    return ('&') + 'utm_source=' + utmSource.split(' ').join('%20')
  }
}

function addUtmMedium() {
  var utmMedium = document.getElementById('medium-input').value;
  if (utmMedium != '') {
    return '&utm_medium=' + utmMedium.split(' ').join('%20')
  } 
}

function addUtmCampaign() {
  var utmCampaign = document.getElementById('campaign-input').value;
  if (utmCampaign != '') {
    return '&utm_campaign=' + utmCampaign.split(' ').join('%20')
  } else {
    return ''
  }
}

function addUtmContent() {
  var utmContent = document.getElementById('content-input').value;
  if (utmContent != '') {
    return '&utm_content=' + utmContent.split(' ').join('%20')
  } else {
    return ''
  }
}

function addUtmTerm() {
  var utmTerm = document.getElementById('term-input').value;
  if (utmTerm != '') {
    return '&utm_term=' + utmTerm.split(' ').join('%20')
  } else {
    return ''
  }
}

function createUtm() {
  var utm = addUrlDecorator() + addAcSource() + addUtmSource() + addUtmMedium() + addUtmCampaign() + addUtmContent() + addUtmTerm();
  document.getElementById("utm").value = utm;
}

function yourUtm() {
  document.getElementById("makeutm").innerHTML = utm;
}


function myFunction() {
  if(document.getElementById("ac-input").value.length == 0)
{
    alert("No Appeal Code! FILL THIS IN OR USE ANOTHER WEBSITE")
}
if(document.getElementById("source-input").value.length == 0)
{
    alert("No Source! FILL THIS IN OR USE ANOTHER WEBSITE")
}
if(document.getElementById("medium-input").value.length == 0)
{
    alert("No Medium Code! FILL THIS IN OR USE ANOTHER WEBSITE")
}
  document.getElementById("demo").innerHTML = "Your UTM is:";
    if(document.getElementById("ac-input").value.length == 0)
    {
      document.getElementById("yourUTM").innerHTML = "error - no appeal code. If you don't need an appeal code, use another link builder"
    }
    else
      document.getElementById("yourUTM").innerHTML = addUrlDecorator() + addAcSource() + addUtmSource() + addUtmMedium() + addUtmCampaign() + addUtmContent() + addUtmTerm();
}

function qr() {
  document.getElementById("qrLink").innerHTML = "Follow this link for a QR code" + "https://api.qrserver.com/v1/create-qr-code/?data=" + addUrlDecorator() + addAcSource() + addUtmSource() + addUtmMedium() + addUtmCampaign() + addUtmContent() + addUtmTerm();
}
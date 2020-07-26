var cap=prompt("Enter the captcha")

function verification(){
  var caption;
  caption=document.getElementById('caption').value;
  if(cap=="recaptcha" && document.getElementById('check').checked){
    document.getElementById('final').write(<a href="contact.html">Click for Contact form</a>);
  }
  else{
    document.getElementById('final').innerHTML="Not Authorised, Reload to try again";
  }
}

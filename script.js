//your JS code here. If required.
 const username=document.getElementById('username');
 const password=document.getElementById('password');
 const submit=document.getElementById('submit');
 const checkbox=document.getElementById('checkbox');
const existing = document.getElementById('existing');

submit.addEventListener('click',function(event){
	event.preventDefault();
	if(username.value != '' && password.value != ''){
		if(checkbox.checked){
			localStorage.setItem('username',username.value);
			localStorage.setItem('password',password.value);
		}else{
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}
		alert("Logged in as " + username.value);
	}
});
if(localStorage.getItem('username')) {
	existing.style.display = 'block';
	existing.addEventListener('click', function() {
		alert("Logged in as " + localStorage.getItem('username'));
	});
} else {
	existing.style.display = 'none';
}
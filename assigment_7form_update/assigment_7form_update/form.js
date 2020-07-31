function form() {
	var a = document.getElementById('form');
	//create heading of from
	var heading = document.createElement('h1');
	heading.innerHTML = 'Register with us';
	heading.style.textAlign = 'center';
	a.appendChild(heading);

	//creating a new element form
	var createform = document.createElement('form');
	createform.setAttribute('id', 'formbody');
	createform.setAttribute('action', ' ');
	createform.setAttribute('name', 'myform');
	createform.setAttribute('onsubmit', 'validatefrom()');
	a.appendChild(createform);
	createform = document.getElementById('formbody');
	console.log(createform);

	//linebreak

	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	//username
	var username = document.createElement('label');
	username.innerHTML = 'Username';
	createform.appendChild(username);
	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);
	//input
	var input_username = document.createElement('input');
	input_username.setAttribute = ('type', 'text');
	input_username.id = 'username';
	input_username.placeholder = 'Enter the Username';
	createform.appendChild(input_username);
	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	//error message
	var error_message = document.createElement('p');
	error_message.innerHTML = 'Username must be at least 3 characters';
	error_message.style.display = 'none';
	error_message.setAttribute('id', 'err_username');
	error_message.style.color = 'red';
	createform.appendChild(error_message);

	//email
	var email = document.createElement('label');
	email.innerHTML = 'email';
	createform.appendChild(email);
	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	var input_email = document.createElement('input');
	input_email.placeholder = 'Enter email address';
	input_email.setAttribute = ('type', 'email');
	input_email.id = 'email';
	createform.appendChild(input_email);
	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	//error message

	var error_message = document.createElement('p');
	error_message.innerHTML = 'Email is not valid';
	error_message.style.display = 'none';
	error_message.setAttribute('id', 'err_email');
	error_message.style.color = 'red';
	createform.appendChild(error_message);

	//password
	var password = document.createElement('label');
	password.innerHTML = 'password';
	createform.appendChild(password);
	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	var input_password = document.createElement('input');
	input_password.placeholder = 'Enter password';
	input_password.setAttribute = ('type', 'password');
	input_password.id = 'password';
	createform.appendChild(input_password);
	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	//error message
	var error_message = document.createElement('p');
	error_message.innerHTML = 'password must atleast of 6 character';
	error_message.style.display = 'none';
	error_message.setAttribute('id', 'err_password');
	error_message.style.color = 'red';
	createform.appendChild(error_message);

	//confirm message
	var confirm_password = document.createElement('label');
	confirm_password.innerHTML = ' confirm_password';
	createform.appendChild(confirm_password);
	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	var input_confirm_password = document.createElement('input');
	input_confirm_password.placeholder = 'Enter password again';
	input_confirm_password.setAttribute = ('type', 'password');
	input_confirm_password.id = 'confirm_password';
	createform.appendChild(input_confirm_password);
	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	//error message
	var error_message = document.createElement('p');
	error_message.innerHTML = 'password doesnot match';
	error_message.style.display = 'none';
	error_message.setAttribute('id', 'err_confirm_password');
	error_message.style.color = 'red';
	createform.appendChild(error_message);

	//submit btn
	btn = document.createElement('button');
	btn.innerHTML = 'Submit';
	btn.setAttribute('id', 'btn');
	btn.style.backgroundColor = '#00B2FF';
	btn.style.color = 'white';
	btn.style.padding = '5px 70px';
	btn.style.margin = '5px';
	createform.appendChild(btn);
}

form();

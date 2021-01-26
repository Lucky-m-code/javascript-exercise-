var bank_accounts = {
	Eden: {
		fullname: 'Eden Tesfaye',
		balance: 100
	},
	Fitsum: {
		fullname: 'Fitsum Alemu',
		balance: 0
	}
};

Eden = bank_accounts.Eden;
function balance() {
	alert('Your Balance is ' + Eden.balance);
}

function deposit(val) {
	Eden.balance += Number(val);
}

function withdraw(val) {
	if (Eden.balance - val < 25) {
		alert('your deposit is low!!!Your minimum balance after withdrawal need to be 25 birr ');
	} else {
		Eden.balance -= val;
		alert('Current Balance is' + Eden.balance);
	}
}

function transfer(val, to = 'Fitsum') {
	if (Eden.balance - val < 25) {
		alert('Your Deposit Is too Low');
	} else {
		Eden.balance -= val;

		alert('Current Balance is' + Eden.balance);
	}
}
(() => {

	while (true) {
		var input = prompt('Welcome to the bank!!\nTo Deposit enter 1\nTo check balance enter 2\n To withdraw enter 3\n To transfer enter 4');

		switch (input) {
			case '1':
				var d = prompt('Enter The amount');
				deposit(d);
				break;
			case '2':
				balance();
				break;
			case '3':
				var w = prompt('Enter The amount');
				withdraw(w);
			case '4':
				var w = prompt('Enter The amount');
				var t = prompt('Enter the person to transfer');
				transfer(w, t);
			
			default:
				alert('Error!');
				return;
		}
	}
})();

console.log('Hallo kita akan membuat RESTful API!')

const fullName = {
	first: 'Dwi',
	last: 'Husnawan',
}

const { last } = fullName

const halo = 'Halo, '
function sayHalo() {
	console.log(halo + last)
}

sayHalo()


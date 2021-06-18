const clientId = 'F345NE5N5BANKIUXERCL0UXRQRU3VI1XIOCO01LUK5MDOVDJ';
const clientSecret = 'TBEADVQPITVH32YKWRCYOEYRM3QYME1NKJJAFJZGRD5TSUXL';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// APIXU Info
const apiKey = '5b11e5ccde9418b89659445a6efd2aa3';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$('#venue1'), $('#venue2'), $('#venue3'), $('#venue4')];
const $weatherDivs = [
	$('#weather1'),
	$('#weather2'),
	$('#weather3'),
	$('#weather4'),
];
const weekDays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

// Add AJAX functions here:
const getVenues = async () => {
	const city = $input.val();
	const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			const venues = jsonResponse.response.groups[0].items.map(
				(location) => location.venue
			);
			return venues;
		}
	} catch (error) {
		console.log(error);
	}
};

const getForecast = async () => {
	const urlToFetch = `${forecastUrl}${apiKey}&q=${$input.val()}&days=4&hour=11`;
	await fetch(urlToFetch, {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	})
		.then((res) => {
			console.log(res.json());
		})
		.catch((err) => {
			return err;
		});
	console.log('response', response);
	if (response.ok) {
		const jsonResponse = await response.json();
		const days = jsonResponse.forecast.forecastday;
		return days;
	}
};

// Render functions
const renderVenues = (venues) => {
	$venueDivs.forEach(($venue, index) => {
		const venue = venues[index];
		const venueIcon = venue.categories[0].icon;
		const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
		let venueContent = createVenueHTML(
			venue.name,
			venue.location,
			venueImgSrc
		);
		$venue.append(venueContent);
	});
	$destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (days) => {
	$weatherDivs.forEach(($day, index) => {
		const currentDays = days[index];
		let weatherContent = createWeatherHTML(currentDays);
		$day.append(weatherContent);
	});
};

const executeSearch = () => {
	$venueDivs.forEach((venue) => venue.empty());
	$weatherDivs.forEach((day) => day.empty());
	$destination.empty();
	$container.css('visibility', 'visible');
	getVenues().then((venues) => renderVenues(venues));
	getForecast().then((forecast) => renderForecast(forecast));
	return false;
};

$submit.click(executeSearch);

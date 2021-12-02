let object = {
	id: 1,
	name: "NightSerum",
	price: 199.99,
	image: "/img/Serum-bottle-02.png",
	description: {
		"skin-type": "Oily, sensitive, dry",
		"skin-concern": "Available to all skin concerns",
		formulation:
			"Natural extract from lavender, aloe vera, and Isatis indigotica.L",
		"Skincare by Age": "Above 20 years-old",
		Ingredients: "Suitable for all skin types"
	}
};

Object.keys(object.description).forEach((des, val) => {
	console.log(des);
	console.log(object.description[des]);
});

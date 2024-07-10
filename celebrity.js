
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const accordionContainer = document.getElementById('accordion-container');
    const deleteModal = document.getElementById('delete-modal');
    const closeModal = document.getElementsByClassName('close')[0];
    const cancelBtn = document.getElementById('cancel-btn');
    const deleteBtn = document.getElementById('delete-btn');

    let celebrities = [];
    let deleteIndex = null;

    // Sample data to simulate fetching from a JSON file
    const sampleData = [
    {
            
		"id": 1,
		"first": "Aidan",
		"last": "Wang",
		"dob": "1973-10-16",
		"gender": "male",
		"email": "aidan.wang@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/93.jpg",
		"country": "New Zealand",
		"description": "This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang."
	},
	{
		"id": 2,
		"first": "Anna",
		"last": "Horten",
		"dob": "1972-03-15",
		"gender": "female",
		"email": "anna.horten@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/48.jpg",
		"country": "Norway",
		"description": "This character description generator will generate a fairly random description of a belonging to Anna Horten. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Anna Horten."
	},
	{
		"id": 3,
		"first": "Max",
		"last": "Arnold",
		"dob": "1954-04-22",
		"gender": "male",
		"email": "max.arnold@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/27.jpg",
		"country": "Ireland",
		"description": "This character description generator will generate a fairly random description of a belonging to Max Arnold. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Max Arnold."
	},
	{
		"id": 4,
		"first": "محمدپارسا",
		"last": "صدر",
		"dob": "1953-06-01",
		"gender": "male",
		"email": "mhmdprs.sdr@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/34.jpg",
		"country": "Iran",
		"description": "This character description generator will generate a fairly random description of a belonging to محمدپارسا صدر. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of محمدپارسا صدر."
	},
	{
		"id": 5,
		"first": "Emilia",
		"last": "Gonzalez",
		"dob": "1949-10-07",
		"gender": "female",
		"email": "emilia.gonzalez@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/90.jpg",
		"country": "Spain",
		"description": "This character description generator will generate a fairly random description of a belonging to Emilia Gonzalez. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emilia Gonzalez."
	},
	{
		"id": 6,
		"first": "Alicia",
		"last": "Ma",
		"dob": "1995-11-23",
		"gender": "female",
		"email": "alicia.ma@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/91.jpg",
		"country": "Canada",
		"description": "This character description generator will generate a fairly random description of a belonging to Alicia Ma. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Alicia Ma."
	},
	{
		"id": 7,
		"first": "یاسمن",
		"last": "كامياران",
		"dob": "1985-06-24",
		"gender": "female",
		"email": "ysmn.kmyrn@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/64.jpg",
		"country": "Iran",
		"description": "This character description generator will generate a fairly random description of a belonging to یاسمن كامياران. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of یاسمن كامياران."
	},
	{
		"id": 8,
		"first": "Reingard",
		"last": "Barz",
		"dob": "1985-03-24",
		"gender": "female",
		"email": "reingard.barz@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/95.jpg",
		"country": "Germany",
		"description": "This character description generator will generate a fairly random description of a belonging to Reingard Barz. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Reingard Barz."
	},
	{
		"id": 9,
		"first": "Felix",
		"last": "Douglas",
		"dob": "1984-07-05",
		"gender": "male",
		"email": "felix.douglas@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/53.jpg",
		"country": "United Kingdom",
		"description": "This character description generator will generate a fairly random description of a belonging to Felix Douglas. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Felix Douglas."
	},
	{
		"id": 10,
		"first": "Claire",
		"last": "Robertson",
		"dob": "2006-04-16",
		"gender": "female",
		"email": "claire.robertson@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/75.jpg",
		"country": "United States",
		"description": "This character description generator will generate a fairly random description of a belonging to Claire Robertson. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Claire Robertson."
	},
	{
		"id": 11,
		"first": "Ümit",
		"last": "Taşlı",
		"dob": "2004-10-17",
		"gender": "male",
		"email": "umit.tasli@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/80.jpg",
		"country": "Turkey",
		"description": "This character description generator will generate a fairly random description of a belonging to Ümit Taşlı. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Ümit Taşlı."
	},
	{
		"id": 12,
		"first": "Tiemo",
		"last": "Monshouwer",
		"dob": "1956-09-11",
		"gender": "male",
		"email": "tiemo.monshouwer@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/16.jpg",
		"country": "Netherlands",
		"description": "This character description generator will generate a fairly random description of a belonging to Tiemo Monshouwer. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Tiemo Monshouwer."
	},
	{
		"id": 13,
		"first": "Dorian",
		"last": "Carpentier",
		"dob": "1963-10-06",
		"gender": "male",
		"email": "dorian.carpentier@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/77.jpg",
		"country": "France",
		"description": "This character description generator will generate a fairly random description of a belonging to Dorian Carpentier. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Dorian Carpentier."
	},
	{
		"id": 14,
		"first": "آرمیتا",
		"last": "موسوی",
		"dob": "1968-07-19",
		"gender": "female",
		"email": "armyt.mwswy@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/59.jpg",
		"country": "Iran",
		"description": "This character description generator will generate a fairly random description of a belonging to آرمیتا موسوی. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of آرمیتا موسوی."
	},
	{
		"id": 15,
		"first": "Lias",
		"last": "Korsvik",
		"dob": "1969-12-09",
		"gender": "male",
		"email": "lias.korsvik@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/69.jpg",
		"country": "Norway",
		"description": "This character description generator will generate a fairly random description of a belonging to Lias Korsvik. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Lias Korsvik."
	},
	{
		"id": 16,
		"first": "Florence",
		"last": "Cooper",
		"dob": "1989-08-31",
		"gender": "female",
		"email": "florence.cooper@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/19.jpg",
		"country": "Ireland",
		"description": "This character description generator will generate a fairly random description of a belonging to Florence Cooper. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Florence Cooper."
	},
	{
		"id": 17,
		"first": "Donald",
		"last": "Harrison",
		"dob": "1947-12-20",
		"gender": "male",
		"email": "donald.harrison@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/34.jpg",
		"country": "United Kingdom",
		"description": "This character description generator will generate a fairly random description of a belonging to Donald Harrison. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Donald Harrison."
	},
	{
		"id": 18,
		"first": "Michael",
		"last": "Nichols",
		"dob": "1963-06-26",
		"gender": "male",
		"email": "michael.nichols@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/76.jpg",
		"country": "United Kingdom",
		"description": "This character description generator will generate a fairly random description of a belonging to Michael Nichols. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Michael Nichols."
	},
	{
		"id": 19,
		"first": "Emile",
		"last": "Miller",
		"dob": "2009-02-03",
		"gender": "male",
		"email": "emile.miller@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/24.jpg",
		"country": "Canada",
		"description": "This character description generator will generate a fairly random description of a belonging to Emile Miller. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emile Miller."
	},
	{
		"id": 20,
		"first": "Marjella",
		"last": "Stuijt",
		"dob": "2014-11-11",
		"gender": "female",
		"email": "marjella.stuijt@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/31.jpg",
		"country": "Netherlands",
		"description": "This character description generator will generate a fairly random description of a belonging to Marjella Stuijt. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Marjella Stuijt."
	}
        
    ];

    // Simulate fetching data from a JSON file
    setTimeout(() => {
        celebrities = sampleData;
        displayCelebrities(celebrities);
    }, 1000);

    searchBar.addEventListener('input', () => {
        const searchQuery = searchBar.value.toLowerCase();
        const filteredCelebrities = celebrities.filter(celeb => celeb.name.toLowerCase().includes(searchQuery));
        displayCelebrities(filteredCelebrities);
    });

    function displayCelebrities(celebrities) {
        accordionContainer.innerHTML = '';

        celebrities.forEach((celeb, index) => {
            const age = calculateAge(new Date(celeb.dob));
            const accordionItem = document.createElement('div');
            accordionItem.classList.add('accordion');

            accordionItem.innerHTML = `
                <div class="accordion-header" data-index="${index}">
                    <span>${celeb.name}</span>
                    <span class="toggle-icon">+</span>
                </div>
                <div class="accordion-content">
                    <form>
                        <label for="age-${index}">Age</label>
                        <input type="text" id="age-${index}" value="${age} Years" disabled>
                        <label for="gender-${index}">Gender</label>
                        <select id="gender-${index}" disabled>
                            <option value="Male" ${celeb.gender === 'Male' ? 'selected' : ''}>Male</option>
                            <option value="Female" ${celeb.gender === 'Female' ? 'selected' : ''}>Female</option>
                            <option value="Transgender" ${celeb.gender === 'Transgender' ? 'selected' : ''}>Transgender</option>
                            <option value="Rather not say" ${celeb.gender === 'Rather not say' ? 'selected' : ''}>Rather not say</option>
                            <option value="Other" ${celeb.gender === 'Other' ? 'selected' : ''}>Other</option>
                        </select>
                        <label for="country-${index}">Country</label>
                        <input type="text" id="country-${index}" value="${celeb.country}" disabled>
                        <label for="description-${index}">Description</label>
                        <textarea id="description-${index}" disabled>${celeb.description}</textarea>
                        <button type="button" class="edit-btn">Edit</button>
                        <button type="button" class="delete-btn">Delete</button>
                    </form>
                </div>
            `;

            accordionContainer.appendChild(accordionItem);
        });

        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', toggleAccordion);
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', toggleEditMode);
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', confirmDelete);
        });
    }

    function calculateAge(dob) {
        const diff = Date.now() - dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function toggleAccordion(event) {
        const header = event.currentTarget;
        const content = header.nextElementSibling;
        const icon = header.querySelector('.toggle-icon');

        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.textContent = '+';
        } else {
            document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
            document.querySelectorAll('.toggle-icon').forEach(icon => icon.textContent = '+');
            content.style.display = 'block';
            icon.textContent = '-';
        }
    }

    function toggleEditMode(event) {
        const button = event.currentTarget;
        const form = button.closest('form');
        const index = form.previousElementSibling.getAttribute('data-index');
        const inputs = form.querySelectorAll('input, select, textarea');

        if (button.textContent === 'Edit') {
            inputs.forEach(input => input.disabled = false);
            button.textContent = 'Save';
            button.nextElementSibling.textContent = 'Cancel';
        } else {
            inputs.forEach(input => input.disabled = true);
            button.textContent = 'Edit';
            button.nextElementSibling.textContent = 'Delete';

            // Update the celebrity data
            const updatedCeleb = {
                name: celebrities[index].name,
                dob: celebrities[index].dob,
                gender: form.querySelector('select').value,
                country: form.querySelector('input[type="text"]').value,
                description: form.querySelector('textarea').value
            };

            celebrities[index] = updatedCeleb;
        }
    }

    function confirmDelete(event) {
        deleteIndex = event.currentTarget.closest('.accordion-content').previousElementSibling.getAttribute('data-index');
        deleteModal.style.display = 'block';
    }

    closeModal.onclick = () => {
        deleteModal.style.display = 'none';
    };

    cancelBtn.onclick = () => {
        deleteModal.style.display = 'none';
    };

    deleteBtn.onclick = () => {
        if (deleteIndex !== null) {
            celebrities.splice(deleteIndex, 1);
            displayCelebrities(celebrities);
            deleteModal.style.display = 'none';
        }
    };
});

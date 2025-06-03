

const services = [
    {
        id: 1,
        title: "Problemas digestivos",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id: 2,
        title: "Saúde Hormonal",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id: 3,
        title: "Bem-estar mental",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id: 4,
        title: "Cuidados Pediátricos",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id: 5,
        title: "Autoimune e Inflamação",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id: 6,
        title: "Saúde do Coração",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    }
]


function makeCard (service) {
    return `
    <div class="bg-white shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer 
    rounded-lg overflow-hidden">
       <div class="p-6 text-left">
            <img src="./src/assets/images/service-icon.png" alt="service icon" class=""> 
            <h3 class="text-2xl font-bold my-4"> ${service.title} </h3>
            <p class="text-gray-700 mb-4"> ${service.description}</p>
       </div> 
     </div>
    `
}

const serviceContainer = document.getElementById('serviceContainer');
serviceContainer.innerHTML = services.map((service) => makeCard(service)).join('');



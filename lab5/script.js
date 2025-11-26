async function loadCatalog() {
    try {
        const response = await fetch('categories.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const categories = await response.json();
        let html = '<h2>Catalog</h2><ul class="list-group">';
        categories.forEach(cat => {
            html += `<li class="list-group-item"><a href="#" onclick="loadCategory('${cat.shortname}')">${cat.name}</a></li>`;
        });
        html += `<li class="list-group-item"><a href="#" onclick="loadSpecials()">Specials</a></li></ul>`;
        document.getElementById('content').innerHTML = html;
    } catch (error) {
        console.error('Error loading catalog:', error);
        document.getElementById('content').innerHTML = '<p>Error loading catalog. Check console for details.</p>';
    }
}

async function loadCategory(shortname) {
    try {
        const response = await fetch(`${shortname}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        let html = `<h2>${data.category.name}</h2><div class="row">`;
        data.items.forEach(item => {
            html += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/200x200?text=${item.shortname}" class="card-img-top" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.description}</p>
                            <p class="card-text"><strong>${item.price}</strong></p>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        document.getElementById('content').innerHTML = html;
    } catch (error) {
        console.error('Error loading category:', error);
        document.getElementById('content').innerHTML = '<p>Error loading category. Check console for details.</p>';
    }
}

function loadSpecials() {
    const categories = ['electronics', 'books', 'clothing', 'home_garden'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    loadCategory(randomCategory);
}

function loadHome() {
    location.reload();
}
document.addEventListener("DOMContentLoaded", function () {
    console.log()
    const searchField = document.getElementById("searchInput");

    document.querySelector(".btn-primary").addEventListener("click", function () {
        const query = "4k Wallpaper";
        fetchImages(query);
    });

    window.search = function () {
        const searchQuery = searchField.value.trim();
        if (searchQuery.length > 0) {
            fetchImages(searchQuery);
        }
    };

    document.querySelector(".btn-secondary").addEventListener("click", function () {
        const secondaryQuery = "gaming";
        fetchImages(secondaryQuery);
    });

    function fetchImages(query) {
        fetch(`https://api.pexels.com/v1/search?query=${query}`, {
            headers: {
                Authorization: "QZOf0VQ55FXyZsuDO0WYz1liyQlMjElWrBJD7YId4TjN25wo100TIZ8R"
            }
        })
        .then(response => response.json())
        .then(data => {
            updatePageContent(data.photos);
        })
        .catch(error => console.error("errore errore errore errore errore:", error));
    }

    function updatePageContent(photos) {
        const container = document.querySelector(".album .container .row");

        container.innerHTML = "";

        photos.forEach(photo => {
            const card = createCard(photo);
            container.appendChild(card);
        });
    }

    function createCard(photo) {
        const card = document.createElement("div");
        card.classList.add("col-md-4");

        const cardInnerHtml = `
            <div class="card mb-4 shadow-sm">
                <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" width="100%" height="225" />
                <div class="card-body">
                    <h5 class="card-title">${photo.photographer}</h5>
                    <p class="card-text">${photo.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary view-btn">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
                        </div>
                        <small class="text-muted">${photo.id} mins</small>
                    </div>
                </div>
            </div>
        `;

        card.innerHTML = cardInnerHtml;

        card.querySelector(".hide-btn").addEventListener("click", function () {
            card.style.display = "none";
        });

        card.querySelector(".view-btn").addEventListener("click", function () {
            const photographerUrl = photo.photographer_url;
            if (photographerUrl) {
                window.open(photographerUrl, '_blank');
            }
        });
console.log(card)
        return card;
        
    }
});
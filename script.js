// Acquire main-body id for changing.
let body = document.querySelector("#main-body");

// Header for consistency + readability
let header = 
`
<header class="main-header">
    <div class="h-name"><a href="#" onclick="buttonClick('Home')">KRISHNA AGUINALDO</a></div>
        <nav class="button-container">
                <!-- <button onclick="headerButton('3D')">3D Projects</button> -->
                <button onclick="buttonClick('Projects')">Projects</button>
                <button onclick="buttonClick('About')">About</button>
         </nav>
</header>
`;

// Landing/home page
let landingPage = header +
`
<div class="showcase">
    <div class="gallery">
                <div class="artwork" data-img="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/crimson%20glow%20(week2).png">
                    <img id="cglow" src="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/crimson%20glow%20(week2).png" alt="Crimson Glow">
                    <div class="caption">
                        <span class="art-title">Crimson Glow</span>
                        <span class="art-desc">
                            Digital Art | 2022<br><br>
                            This artwork was first created by a vision of red crystals. At the time, I was not exactly sure on what it was, until I created a world revolving around it.
                        </span>
                    </div>
                </div>
                <div class="artwork" data-img="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/liberty%20but%20with%20rl%20sig.png">
                    <img id="liberty" src="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/liberty%20but%20with%20rl%20sig.png" alt="Liberty">
                    <div class="caption">
                        <span class="art-title">"Liberty"</span>
                        <span class="art-desc">
                            Digital Art | 2021<br><br>
                            Part of my Studio Arts work, this was inspired by the idea of liberty and freedom. I took inspiration from Frank Frazetta and Eugene Delacroix in particular to their paintings. It is paired with "Tyranny".
                        </span>
                    </div>
                </div>
                <div class="artwork" data-img="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/tyranny%20but%20with%20rl%20sig.png">
                    <img id="tyranny" src="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/tyranny%20but%20with%20rl%20sig.png" alt="Tyranny">
                    <div class="caption">
                        <span class="art-title">"Tyranny"</span>
                        <span class="art-desc">
                            Digital Art | 2021 <br><br>
                            Part of my Studio Arts work, this was inspired by oppression and tyranny. Mostly taking inspiration from mainly Frank Frazetta, this piece is paired with "Liberty."
                    </div>
                </div>
            </div>
            <!-- Lightbox modal -->
            <div id="lightbox" class="lightbox">
                <span class="lightbox-close" id="lightbox-close">&times;</span>
                <img class="lightbox-img" id="lightbox-img" src="" alt="Artwork enlarged">
                <div class="lightbox-caption" id="lightbox-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi.</div>
            </div>
</div>
`

// 2d project showcase

// Set landing page as default
body.innerHTML = landingPage;   

// Lightbox functionality for illustration gallery
function setupLightbox() {
    const artworks = document.querySelectorAll('.artwork');
    const lightbox = document.querySelector('#lightbox');
    const lightboxImg = document.querySelector('#lightbox-img');
    const lightboxClose = document.querySelector('#lightbox-close');
    const lightboxCaption = document.querySelector('#lightbox-caption');

    artworks.forEach(art => {
        art.addEventListener('click', function() {
            const imgSrc = art.getAttribute('data-img');
            // Extract title and description from .art-title and .art-desc if present
            const titleSpan = art.querySelector('.art-title');
            const descSpan = art.querySelector('.art-desc');
            let titleText = '';
            let descText = '';
            if (titleSpan) {
                titleText = titleSpan.innerHTML; // innerHTML to preserve the line breaks (<br>)
            } else {
                // Fallback: use caption textContent if no .art-title
                const caption = art.querySelector('.caption');
                titleText = caption ? caption.textContent.trim() : '';
            }
            if (descSpan) {
                descText = descSpan.innerHTML;
            }
            // Show both title and description in the lightbox caption
            lightboxImg.src = imgSrc;
            lightboxCaption.innerHTML = `
                <span class="art-title">${titleText}</span>
                ${descText ? `<span class="art-desc art-desc-show">${descText}</span>` : ''}
            `;
            lightbox.classList.add('active');
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
        lightboxCaption.innerHTML = '';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
            lightboxCaption.innerHTML = '';
        }
    });
}

setupLightbox();

// Header button function
function buttonClick(section) {
    switch (section) {
        case 'Home':
            null;
        case 'Projects':
            null;
        case '2D':
            null;
        case '3D':
            null;
        case 'About':
            null;
        default: 
            break;
    }
}
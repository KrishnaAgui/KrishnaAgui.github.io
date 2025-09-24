// Acquire main-body id for changing.
let body = document.querySelector("#main-body");

// Header for consistency + readability
let header = 
`
<header class="main-header">
            <div class="h-name"><button onclick="buttonClick('Home')">KRISHNA AGUINALDO</button></div>
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
<div class="home-showcase">
    <img id="h-cglow" src="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/crimson%20glow%20(week2).png"></img>
        <div class="home-header fade-in">
            <h1>
                KRISHNA AGUINALDO<BR>
                PORTFOLIO
            </h1>
        </div>
    </div>
</div>
`;

// 2D Showcase Page
let showcasePage = header +
`
<div class="showcase">
            <h1 class="showcase-section-break">CREATIVE WEBSITES</h1>
            <div class="website-showcase">
                <div class="w-preview">
                    <img src="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/Rift%20Watch%20preview.png">
                </div>
                <div class="w-caption">
                    <h1 class="w-title">The Rift Watch Database</h1>
                    <span class="w-desc">

                    </span>
                </div>
            </div>
            <h1 class="showcase-section-break">ILLUSTRATIONS<h1>
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
                            Digital Art | 2021<br><br>
                            Part of my Studio Arts work, this was inspired by oppression and tyranny. Mostly taking inspiration from mainly Frank Frazetta, this piece is paired with "Liberty."
                    </div>
                </div>
                <div class="artwork" data-img="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/dark%20forest.png">
                    <img src="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/dark%20forest.png" alt="Walking through the Dark Forest">
                    <div class="caption">
                        <span class="art-title">Walking through the dark forest</span>
                        <span class="art-desc">
                            Digital Art | 2023<br><br>
                            This was around the time I was playing Lobotomy Corporation, a game about managing a facility with entities called Abnormalities, which are born from human consciousness. This one is inspired by the Black Forest within the game, where three bird-like abnormalities come from. I aimed to capture its eerieness.
                        </span>
                    </div>
                </div>
                <div class="artwork" data-img="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/Aeolus%20III.png">
                    <img src="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/Aeolus%20III.png" alt="Aeolus">
                    <div class="caption">
                        <span class="art-title">Aeolus</span>
                        <span class="art-desc">
                            Digital Art | 2025<br><br>
                            Based on my own version of Flight Rising's world, this was a depiction of one of my own dragons, Aeolus. The winds and air are the focus, since he is a wind elemental dragon, focused on other's freedom.
                        </span>
                    </div>
                </div>
                <div class="artwork" data-img="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/Unikorpi%20-%20Geist.png">
                    <img src="https://file.garden/aGKU5gK8lRt7Hupy/folio%20showcase/Unikorpi%20-%20Geist.png" alt="Geist (commission work)">
                    <div class="caption">
                        <span class="art-title">Geist (commission work)</span>
                        <span class="art-desc">
                            Digital Art | 2025<br><br>
                            A commissioned artwork of an online user's (UniKorpi20) character. The keyword they gave me was a "dreamscape forest", so I focused more on the mystical and "ghostly" entities surrounding the character, as well as them interacting with one.
                        </span>
                    </div>
                </div>

            </div>
            <!-- Lightbox modal -->
            <div id="lightbox" class="lightbox">
                <span class="lightbox-close" id="lightbox-close">&times;</span>
                <img class="lightbox-img" id="lightbox-img" src="" alt="Artwork enlarged">
                <div class="lightbox-caption" id="lightbox-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi.</div>
            </div>
`;

// about page
let aboutPage = header +
`
<div class="about-page">
    <h1>About Me</h1>
    <p>I am a virtual environmental artist who specialises in both 2D and 3D environmental and conceptual design in 
    interactive media, such as games. I use programs such as Unity, Autodesk Maya, and Blender in order to create 
    environments that can immerse and enhance the experience of the audience. I am passionate about making concepts 
    come to life, and making them real. I am a focused, empathetic individual who gives great attention to detail to 
    all creations that I make.</p>
</div>
<div class="contact-info">
    <br><p>Contact me at:</p>
    <ul>
        <li>Email: krishna.agui@gmail.com</li>
        <li><a href="https://www.linkedin.com/in/krishna-aguinaldo/">LinkedIn</a></li>
    </ul>
</div>
`;

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


// Header button function
function buttonClick(section) {
    switch (section) {
        case 'Home':
            body.innerHTML = landingPage;
        case 'Projects':
            body.innerHTML = showcasePage;
            setupLightbox();
        case '3D':
            null;
        case 'About':
            body.innerHTML = aboutPage;
        default: 
            break;
    }
}
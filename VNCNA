(function() {
    if (window.voidNanoReady) return;
    window.voidNanoReady = true;

    function init() {
        setupSearch();
        setupCards();
        setupButtons();
        setupCanvasBackground();
    }

    function setupSearch() {
        const searchInput = document.getElementById('s1');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                const title = card.querySelector('.lab') ? .textContent ? .toLowerCase() || '';
                card.style.display = title.includes(query) ? '' : 'none';
            });

            const visible = Array.from(cards).filter(c => c.style.display !== 'none').length;
            const countEl = document.getElementById('c1');
            if (countEl) {
                countEl.textContent = visible + ' games';
            }
        });
    }

    function setupCards() {
        const cards = document.querySelectorAll('.card');
        const player = document.getElementById('player');
        const playerFrame = document.getElementById('pf');
        const playerTitle = document.getElementById('t2');
        const backBtn = document.getElementById('k1');

        if (!player || !cards.length) return;

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('.lab') ? .textContent || 'Game';
                playerTitle.textContent = title;
                player.classList.add('on');
            });
        });

        if (backBtn) {
            backBtn.addEventListener('click', () => {
                player.classList.remove('on');
                playerFrame.src = '';
            });
        }
    }

    function setupButtons() {
        const fullscreenBtn = document.getElementById('f1');
        const playerFrame = document.getElementById('pf');

        if (fullscreenBtn && playerFrame) {
            fullscreenBtn.addEventListener('click', () => {
                if (playerFrame.requestFullscreen) {
                    playerFrame.requestFullscreen().catch(err => {
                        console.log('Fullscreen request failed:', err);
                    });
                }
            });
        }

        const loadMoreBtn = document.querySelector('.more button');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                console.log('Load more clicked - implement your logic here');
            });
        }
    }

    function setupCanvasBackground() {
        const canvas = document.getElementById('b1');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function drawBackground() {
            ctx.fillStyle = 'rgba(11, 11, 13, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
            ctx.lineWidth = 1;
            const gridSize = 50;

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        }

        resizeCanvas();
        drawBackground();

        window.addEventListener('resize', () => {
            resizeCanvas();
            drawBackground();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

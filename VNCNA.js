(function() {
    if (window.voidNanoLoaded) return;
    window.voidNanoLoaded = true;

    function init() {
        const searchInput = document.getElementById('s1');
        const countDisplay = document.getElementById('c1');

        if (searchInput && countDisplay) {
            searchInput.addEventListener('input', handleSearch);
        }

        setupCardClicks();

        setupButtons();

        setupCanvas();
    }

    function handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.grid .card');
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector('.lab') ? .textContent ? .toLowerCase() || '';
            const shouldShow = title.includes(query);
            card.style.display = shouldShow ? '' : 'none';
            if (shouldShow) visibleCount++;
        });

        const countDisplay = document.getElementById('c1');
        if (countDisplay) {
            countDisplay.textContent = visibleCount + ' game' + (visibleCount !== 1 ? 's' : '');
        }
    }

    function setupCardClicks() {
        const cards = document.querySelectorAll('.grid .card');
        const player = document.getElementById('player');
        const playerTitle = document.getElementById('t2');
        const backBtn = document.getElementById('k1');

        if (!player) return;

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('.lab') ? .textContent || 'Game';
                if (playerTitle) playerTitle.textContent = title;
                player.classList.add('on');
            });
        });

        if (backBtn) {
            backBtn.addEventListener('click', () => {
                player.classList.remove('on');
                const iframe = document.getElementById('pf');
                if (iframe) iframe.src = '';
            });
        }
    }

    function setupButtons() {
        const fullscreenBtn = document.getElementById('f1');
        const pf = document.getElementById('pf');
        const loadMoreBtn = document.querySelector('.more button');

        if (fullscreenBtn && pf) {
            fullscreenBtn.addEventListener('click', () => {
                if (pf.requestFullscreen) {
                    pf.requestFullscreen().catch(err => console.log('Fullscreen failed:', err));
                }
            });
        }

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                console.log('Load more games clicked');
            });
        }
    }

    function setupCanvas() {
        const canvas = document.getElementById('b1');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        function draw() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.fillStyle = 'rgba(11, 11, 13, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        draw();
        window.addEventListener('resize', draw);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

const flower = document.getElementById('flower-bg');
        const navItems = document.querySelectorAll('.item');

        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                flower.style.display = 'block';
                flower.classList.add('spin');
            });

            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Optional offsets to center the flower image
                const offsetX = -25; // half of flower width (if 50px)
                const offsetY = -25;

                flower.style.left = `${rect.left + x + offsetX}px`;
                flower.style.top = `${rect.top + y + offsetY}px`;
            });

            item.addEventListener('mouseleave', () => {
                flower.style.display = 'none';
                flower.classList.remove('spin');
            });
        });

// Tab navigácia
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(tabName) {
    // Skryť všetky obsahy
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Deaktivovať všetky tlačidlá
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Zobraziť vybraný obsah
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Aktivovať vybrané tlačidlo
    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }

    // Uložiť aktívny tab do localStorage
    localStorage.setItem('activeTab', tabName);
}

// Event listenery pre tab tlačidlá
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        switchTab(tabName);
    });
});

// Načítať changelog
fetch('../docs/CHANGELOG.md', {cache: 'no-cache'})
    .then(res => {
        if (!res.ok) {
            throw new Error('Changelog sa nepodarilo načítať');
        }
        return res.text();
    })
    .then(md => {
        document.getElementById('changelog-content').innerHTML = marked.parse(md);
    })
    .catch(err => {
        console.error('Chyba pri načítavaní CHANGELOG:', err);
        document.getElementById('changelog-content').innerHTML = 
            '<p style="color: #ff6b6b;">Changelog sa momentálne nepodarilo načítať.</p>';
    });

// Pri načítaní stránky obnoviť posledný aktívny tab
window.addEventListener('DOMContentLoaded', () => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        switchTab(savedTab);
    }
});

// Smooth scroll pre interné odkazy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});


/**
 * Auto-Update Script for Izumi Gardening Website
 * 
 * Automatically updates:
 * - Copyright year
 * - Years of experience (since 1977)
 */

(function() {
    'use strict';
    
    // 創業年（昭和52年 = 1977年）
    const FOUNDING_YEAR = 1977;
    
    /**
     * Initialize auto-update on DOM ready
     */
    function init() {
        updateCopyrightYear();
        updateExperienceYears();
    }
    
    /**
     * Update copyright year to current year
     */
    function updateCopyrightYear() {
        const currentYear = new Date().getFullYear();
        
        // Find all elements with data-auto-year attribute
        const yearElements = document.querySelectorAll('[data-auto-year]');
        yearElements.forEach(element => {
            element.textContent = currentYear;
        });
        
        // Fallback: Update #copyright if it exists and contains a year pattern
        const copyrightElement = document.getElementById('copyright');
        if (copyrightElement) {
            copyrightElement.innerHTML = copyrightElement.innerHTML.replace(
                /Copyright&copy;\s*\d{4}/i,
                'Copyright&copy; ' + currentYear
            );
        }
    }
    
    /**
     * Update years of experience based on founding year
     */
    function updateExperienceYears() {
        const currentYear = new Date().getFullYear();
        const experienceYears = currentYear - FOUNDING_YEAR;
        
        // Find all elements with data-auto-experience attribute
        const experienceElements = document.querySelectorAll('[data-auto-experience]');
        experienceElements.forEach(element => {
            element.textContent = experienceYears;
        });
        
        // Find all elements with data-auto-experience-text attribute (for "◯年の実績" format)
        const experienceTextElements = document.querySelectorAll('[data-auto-experience-text]');
        experienceTextElements.forEach(element => {
            element.textContent = experienceYears + '年の実績';
        });
        
        // Find all elements with data-auto-founding attribute (for "昭和52年（◯年の実績）" format)
        const foundingElements = document.querySelectorAll('[data-auto-founding]');
        foundingElements.forEach(element => {
            element.textContent = '昭和52年（' + experienceYears + '年の実績）';
        });
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM is already ready
        init();
    }
})();


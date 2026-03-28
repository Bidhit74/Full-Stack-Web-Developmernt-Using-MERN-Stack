// Polyfill is a piece of code used to provide modern JavaScript functionality in older browsers.

// Why Polyfill Needed?

// Not all browsers support new JavaScript features.

// Example:

// Old browser doesn't support map()
// We write polyfill to make it work

const arr = [1, 2, 3, 4, 5];

if (!Array.prototype.map) {
    // Fallback - Polyfill - Backup function
    Array.prototype.myMap = function () {};
}

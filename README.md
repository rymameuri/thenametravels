# The Name Travels

A single-page website about how the name **Dar Yema** (دار يما), a Maghrebi restaurant at Doha Oasis, Printemps Doha, is written and described for different readers: on its sign, in the Michelin Guide, in a press release and in visitor reviews.

76-324 Language and Place.

Created for 76-324 Language and Place, Carnegie Mellon University in Qatar, Fall 2026.

## Run it

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Structure

```
index.html      page content, semantic sections with ids #door to #finding
css/styles.css  design tokens in :root, then layout and components
js/main.js      swipe controls for the readers carousel
photos/         my own field photographs (P-numbers match my evidence log)
```

## Notes

- Fonts (Amiri, Aref Ruqaa, Tajawal) load from Google Fonts.
- The carousel is a native scroll-snap container; the buttons and arrow keys only scroll it.
- Motion respects `prefers-reduced-motion`.
- Dashed boxes on the page are notes to myself about material still to add.
- Photographs are my own. Photo P24 shows a staff member and is deliberately left out until I have permission.

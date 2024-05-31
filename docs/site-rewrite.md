# Website rewrite (2024)

This document is a collection of notes / generative (local LLM-based) review of the website and ideas for the future. Lightly edited from a previous conversation.


## Basic site notes

The `index.html` is written in HTML5, and contains three main sections: `header`, `main` content, and `footer`. 

The `header` has a simple structure with a title and a navigation bar containing links to different sections of the site. The links are labeled **Home**, **About Us**, **Services**, **Gallery** and **Contact Us**. 

The `main` section has a two-column layout where the left column contains an image slideshow using JavaScript while the right side shows text content using `div` tags and some CSS styling for font and paragraph formatting. 

The `footer` is also simple, it has center-aligned text with links to social media sites.


## Suggested improvements

To optimize the website's HTML code, we could consider the following changes:

1. Use semantic elements like `header`, `nav`, `main`, `section` and `footer` to give structure and meaning to the content. This will also help search engines understand the page layout better.

2. Instead of using inline JavaScript for the slideshow, consider using a JavaScript library or CSS3 animations for smoother transitions and better responsiveness.

3. Minify and combine all CSS styling into one external .css file to reduce HTTP requests and improve load time.

4. Same goes for the JavaScript, move all script content into an external .js file. This will not only clean up the HTML code but also make it more maintainable.

5. Use responsive design techniques to make the layout adapt to different screen sizes for better mobile compatibility.

6. Add alt text to images for better accessibility and SEO.

7. Finally, consider using an HTML validator tool to identify and fix any syntax errors in the code.

These changes will help improve the website's performance, accessibility and maintainability.

## Follow-up questions / considerations

### Slide show improvements

For an updated slideshow, we could consider using popular libraries like Swiper or Glide which offer plenty of customization options and are easy to integrate. They provide good documentation and examples so we can match the slideshows looks and functionality to the site's needs.

### CSS organization

Combining CSS into one file is generally recommended for performance reasons, but yes, there are some use cases where keeping certain styles inline could be beneficial. In this case, the font and paragraph styles could be left as is, especially if they are specific to certain elements and don't need to be globally applied. It's more about finding a balance between keeping the HTML clean and maintaining flexibility for styling.

### JavaScript organization

Moving all JavaScript to an external file is more of a best practice for larger apps or complex scripts. For this website, separating the slideshow script would already be a good start and keep the HTML cleaner. Keeping some smaller scripts inline might not have a huge impact on performance but could make the HTML more cluttered. It's also beneficial to keep the amount of external requests to a minimum.

### HTML structure

Semantic elements help search engines understand the content hierarchy and improve accessibility for screen readers. They provide meaning and structure to the page, which can slightly improve SEO. For instance, using `<header>` tells search engines that this section contains navigation links. It also makes the code more readable and maintainable. You wouldn't need to change existing IDs and classes, as these elements can still use them.

HTML validators are useful tools that can help catch common syntax errors, unclosed tags, or missing attributes. While these errors might not crash the site, they can cause unexpected rendering issues or make the page less accessible. It's a good practice to run the HTML through a validator before going live to ensure a solid baseline of quality.

### Design considerations
 
Some common responsive techniques include using media queries in CSS to adjust layouts, fonts, and images for different screen sizes. Using percentages or viewport units instead of fixed pixel widths is a good start. You might also consider using CSS flexbox or grid layouts for two-column structures like this one.
  
For a smoother transition to responsive design, you could start by designing the page for mobile first and then adjust for desktops. This way you ensure the mobile layout is prioritized and not an afterthought.

 In this case, you might want to stack the header navigation links vertically for better touchscreen accessibility. You could use media queries like this:
 
 ```css
 /* Desktop styles */
 .navigation {
   display: flex;
   justify-content: space-between;
 }

 /* Mobile styles - kicks in at 768px or less */
 @media (max-width: 768px) {
   .navigation {
     flex-direction: column;
   }
 }
 ```

For the two-column layout, you could use percentages or grid layouts to make them stack horizontally on mobile and sit beside each other on larger screens.
  
   - Another common technique is to use `max-width` to limit the width of the content container on larger screens, keeping it centered:
   ```css
   .content-container {
     max-width: 80%;
     margin: auto;
   }
   ```

   - The mobile and desktop versions don't have to be exact reflections of each other. The desktop version can have additional styling or content as long as the mobile layout serves as a solid foundation. For example, you might expand the header on desktops to include more navigation links or add desktop-specific features.

 This approach ensures your design is optimized for touch screens and smaller devices first, while still providing a robust experience on desktops.

 
#### Media Queries
 
You might want to add media queries to adjust the layout and font sizes for different screen sizes. For example, you could reduce the header and paragraph font sizes on smaller screens and modify the button styles to ensure they remain usable on mobile devices.

Media query ranges depend on the design and target devices, but some common breakpoints include:
 
 - Mobile Portrait & Landscape: 320px, 568px
 - Tablet Portrait & Landscape: 768px, 1024px
 - Desktop: 1200px, 1440px

#### Link Styling
 
It's a good practice to reset default link styles and restore them for better accessibility and consistency. You could add `text-decoration: none;` to remove the underline and restore it on hover with `text-decoration: underline;`. This ensures visitors recognize the clickable element easily.
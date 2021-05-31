# Custom-checkbox-with-only-HTML-CSS
Custom your checkbox with only HTML, CSS and some JavaScript for activating a dark mode for exemple

It's difficult to custom a checkbox with CSS properties, because it will not have effects on your web page.
So what you can do is, masking your default checkbox and adding shape and/or text before or after your checkbox with the CSS selector ::after and ::before and use the CSS property: content.

Firtly, let's see the web page without CSS, it looks like:

![image](https://user-images.githubusercontent.com/50472875/120163611-f7013100-c1f9-11eb-83e8-1cef4d475f3e.png)


At this point, I have added a relative position for the container of the checkbox, and that will help me to place children.
In addition, I have played with the opacity to mask the default checkbox, then I have created my own checkbox with the CSS property <content> with the CSS pseudo-classes 
::after and ::before.
Finally, I have creatde my custom checkbox, by giving him width and height and applies some CSS properties like border and border-radius. 
Thus, when checkbox is not Checked, I change the background color.
It's easy no :)
  
Let's see the web page now with CSS:
  
![image](https://user-images.githubusercontent.com/50472875/120164777-354b2000-c1fb-11eb-88fa-3b8a46e97994.png)

  
Now with JavaScript, I can able or enable the dark mode.
An exemple of abling the dark mode looks like:
  
![image](https://user-images.githubusercontent.com/50472875/120165648-10a37800-c1fc-11eb-8b77-9499dbc561cc.png)


You can see the entire code in files: index.html, style.css and app.js.
Hope you liked the code.
See you soon for a new Web-From-Scratch (:

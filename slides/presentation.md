<!-- .slide: class="title-slide" -->

# Your Presentation Title

## An Amazing Subtitle

<div class="author">Your Name</div>
<div class="date">November 2024</div>

Note: Speaker notes go here. Press 'S' to open speaker view.

---

## Agenda

- Introduction
- Main Concepts
- Deep Dive
- Examples & Demos
- Conclusion
- Q&A

---

## Introduction

This is a regular slide with some content.

- First bullet point
- Second bullet point
  - Nested item
  - Another nested item
- Third bullet point

Note: Remember to explain the context here

---

## Code Examples

```javascript
// JavaScript example
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet('World');
console.log(message);
```

```python
# Python example
def calculate_fibonacci(n):
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

print(calculate_fibonacci(10))
```

---

## Code Highlighting

Highlight specific lines to focus attention

```javascript [1-2|4-6|8-10]
// Import required modules
import { useState, useEffect } from 'react';

// Define the component
function Counter() {
  const [count, setCount] = useState(0);

  // Update count on button click
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Note: Lines highlight progressively as you advance through the slide

---

## Code Highlighting with Line Numbers

Show line numbers for better reference

```python [1|3-5|7-8]
def factorial(n):
    """Calculate factorial of n"""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Calculate factorial of 5
result = factorial(5)
print(f"Factorial: {result}")
```

Note: Combine line numbers with step-by-step highlighting

---

## Advanced Code Highlighting

Multiple language support with focused highlighting

```java [1,8|3-6|10-12]
public class Example {
    
    public static void main(String[] args) {
        String message = "Hello, World!";
        System.out.println(message);
    }
    
    private static void helper() {
        // Helper method
        for (int i = 0; i < 10; i++) {
            System.out.println("Value: " + i);
        }
    }
}
```

Note: Highlight specific lines, ranges, or combinations

---

## Two-Column Layout

<div class="columns">
  <div class="column">

### Left Column

- Point 1
- Point 2
- Point 3

  </div>
  <div class="column">

### Right Column

```json
{
  "name": "example",
  "version": "1.0.0",
  "main": "index.js"
}
```

  </div>
</div>

---

## Images and Media

![Placeholder Image](https://via.placeholder.com/600x400)

<small>Image caption goes here</small>

---

## Fragments

<p class="fragment">This appears first</p>
<p class="fragment">This appears second</p>
<p class="fragment">This appears third</p>

---

## Quotes

> "The best way to predict the future is to invent it."
>
> — Alan Kay

---

## Tables

| Feature | Basic | Pro | Enterprise |
|---------|-------|-----|------------|
| Users   | 1     | 5   | Unlimited  |
| Storage | 10GB  | 50GB| 500GB      |
| Support | Email | Priority | Dedicated |
| Price   | Free  | $10/mo | $50/mo   |

---

## Math Support

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$:

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

---

<!-- .slide: data-background-color="#2c3e50" -->

## Background Colors

You can set custom background colors for individual slides

---

<!-- .slide: data-background-image="https://source.unsplash.com/1600x900/?nature" data-background-opacity="0.5" -->

## Background Images

Add beautiful background images with opacity control

---

## Vertical Slides

Press down arrow to navigate vertically

--

### Vertical Slide 1

This is a vertical sub-slide

--

### Vertical Slide 2

Another vertical sub-slide with content

---

## Animations

<!-- .slide: data-auto-animate -->

<h3 data-id="title">Animation Example</h3>
<div data-id="box" style="background: #3498db; width: 100px; height: 100px;"></div>

---

## Animations

<!-- .slide: data-auto-animate -->

<h3 data-id="title">Animation Example</h3>
<div data-id="box" style="background: #e74c3c; width: 200px; height: 200px;"></div>

---

## Interactive Elements

<button onclick="alert('Hello from Reveal.js!')">Click Me!</button>

<input type="text" placeholder="Type something..." style="font-size: 1em; padding: 10px;">

---

## Icons with Font Awesome

<i class="fas fa-rocket fa-3x" style="color: #3498db;"></i>
<i class="fas fa-heart fa-3x" style="color: #e74c3c;"></i>
<i class="fas fa-code fa-3x" style="color: #2ecc71;"></i>

Use icons to enhance your presentations!

---

## Links and Resources

- [Reveal.js Documentation](https://revealjs.com)
- [Markdown Guide](https://www.markdownguide.org)
- [Your GitHub](https://github.com)

---

<!-- .slide: class="title-slide" -->

# Thank You!

## Questions?

<div class="author">
  <i class="fab fa-twitter"></i> @yourhandle<br>
  <i class="fab fa-github"></i> github.com/yourusername<br>
  <i class="fas fa-envelope"></i> email@example.com
</div>
# Green Code Diaries

Welcome to **Green Code Diaries** - A blog dedicated to sharing insights about software development, coding best practices, environmental impact of technology, and digital transformation stories.

> "From Green Fields to Blue Screens — And Back."

## 🌱 About

Green Code Diaries is a modern blogging platform that combines the passion for coding with environmental consciousness. We share articles, tutorials, and insights on:

- 💻 **Software Development** - Best practices, coding patterns, and tutorials
- 🌍 **Sustainable Tech** - Building eco-friendly applications
- 📱 **Web Technologies** - Modern frameworks and tools
- 🚀 **Tech Trends** - Latest developments in the tech industry
- 💡 **Coding Diaries** - Real-world experiences and lessons learned

## 🎯 Features

### 📄 Pages
- **Home Page** - Featured articles and latest blog posts
- **About Page** - Learn about our mission and content
- **Contact Page** - Get in touch with us
- **Blog Posts** - Detailed articles with rich content

### 🤖 AI Chatbot
An intelligent assistant that helps users:
- Navigate the website
- Find relevant content
- Get information about our blog
- Contact support

**How to use the chatbot:**
1. Click the chat icon in the bottom-right corner
2. Type your question or message
3. The AI will provide helpful responses

### 🎨 Design Features
- **Modern Gradient Theme** - Green (#00f260) and Blue (#0575e6) color scheme
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Social Media Integration** - LinkedIn, Instagram, and X (Twitter) links
- **Smooth Animations** - Enhanced user experience with CSS animations
- **Accessibility** - Clean, readable content structure

## 📁 Project Structure

```
MKT project/
├── index.html                 # Home page
├── about.html                # About page
├── contact.html              # Contact page
├── assets/
│   ├── css/
│   │   ├── style.css         # Main stylesheet
│   │   ├── social-icons.css  # Social media icons styling
│   │   ├── about.css         # About page specific styles
│   │   └── chatbot.css       # Chatbot widget styles
│   ├── js/
│   │   ├── main.js           # Main JavaScript
│   │   └── chatbot.js        # AI Chatbot functionality
│   └── images/               # Image assets
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side requirements needed for basic functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Harish-Ramesh-1/Green-Code-Diaries.git
   cd Green-Code-Diaries
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: 
  - Modern CSS with Flexbox and Grid
  - Gradient backgrounds
  - Smooth transitions and animations
- **Chatbot**: Pure JavaScript with keyword-based AI responses
- **Icons**: SVG for social media and UI elements
- **Fonts**: System fonts for optimal performance

## 📝 Color Scheme

- **Primary Green**: `#00f260` - Fresh, energetic accent
- **Primary Blue**: `#0575e6` - Professional, trust-building
- **Gradient**: `linear-gradient(to right, #00f260, #0575e6)`
- **Background**: `#ffffff` (Light theme)
- **Text**: `#333333` - Dark text for readability

## 🎯 Key Components

### Navigation Bar
- Home, About, Contact links
- Social media icons (LinkedIn, Instagram, X)
- Consistent across all pages

### Hero Section
- Eye-catching banner with gradient background
- Call-to-action button
- Brief tagline

### Featured Articles
- Showcase of latest blog posts
- Article cards with descriptions
- Links to full articles

### Newsletter Signup
- "Stay Updated" email subscription box
- Input field and subscribe button
- Compact and user-friendly

### Footer
- Copyright information
- Social media links
- Scroll-to-top button

### AI Chatbot
- Floating widget in bottom-right corner
- Intelligent keyword-based responses
- Clean, modern chat interface
- Mobile-friendly

## 💬 Chatbot Capabilities

The AI chatbot can help with:
- **Greetings** - Responds to hello, hi, hey, etc.
- **Blog Information** - Questions about articles and content
- **Website Navigation** - Guides users through the site
- **Contact Support** - Directs to contact page
- **General Help** - Provides assistance options
- **Closing** - Friendly goodbye messages

### Example Conversations
```
User: "Hello!"
Bot: "Hello! Welcome to Green Code Diaries! How can I help you today?"

User: "What's your blog about?"
Bot: "Green Code Diaries is a blog dedicated to sharing insights about software 
development, environmental impact of tech, and coding diaries. Is there anything 
specific you'd like to know?"

User: "How can I contact you?"
Bot: "You can reach us through the Contact page. We'd love to hear from you! 
Is there something specific you'd like to discuss?"
```

## 📱 Responsive Design Breakpoints

- **Desktop**: Full-width layout (> 1024px)
- **Tablet**: Adjusted layout (768px - 1024px)
- **Mobile**: Single column layout (< 768px)

## 🎨 Customization

### Changing Colors
Edit the gradient colors in `assets/css/style.css`:
```css
.logo {
  background: linear-gradient(to right, #00f260, #0575e6);
}
```

### Adding New Articles
1. Create a new section with the article class
2. Follow the existing article card structure
3. Add your content and styling

### Customizing Chatbot Responses
Edit `assets/js/chatbot.js` and modify the `responses` object:
```javascript
this.responses = {
  greeting: ["Your custom greeting here"],
  // ... other categories
};
```

## 📞 Contact & Social Media

- **LinkedIn**: [Your Profile](https://linkedin.com/in/your-profile)
- **Instagram**: [@your-profile](https://instagram.com/your-profile)
- **X (Twitter)**: [@your-profile](https://x.com/your-profile)
- **Contact Page**: Available at `/contact.html`

## 📄 Pages Overview

### Home Page (`index.html`)
- Hero section with tagline
- Featured articles section
- Newsletter signup
- Social media links
- Scroll-to-top button
- AI Chatbot

### About Page (`about.html`)
- Personal introduction
- Mission statement
- Content categories
- Why Green Code Diaries
- Social media icons in navigation

### Contact Page (`contact.html`)
- Contact form with fields:
  - Name
  - Email
  - Subject
  - Message
- Submit button
- Social media links

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📈 Future Enhancements

- [ ] Add search functionality
- [ ] Implement comment system
- [ ] Add dark mode toggle
- [ ] Integrate with backend API
- [ ] Add newsletter email service
- [ ] Implement advanced AI with NLP
- [ ] Add user authentication
- [ ] Create admin panel for blog management
- [ ] Add pagination for articles
- [ ] Implement blog categories and tags

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License. See LICENSE file for details.

## 👤 Author

**Harish Ramesh**
- Portfolio: [Green Code Diaries](https://greencodediaries.com)
- GitHub: [@Harish-Ramesh-1](https://github.com/Harish-Ramesh-1)

## 💝 Acknowledgments

- Inspired by a passion for sustainable technology
- Built with ❤️ for the tech community
- Special thanks to all readers and supporters

## 📞 Support

If you have any questions or need assistance:
1. Check the About page for more information
2. Use the AI Chatbot for quick answers
3. Visit the Contact page to reach out
4. Open an issue on GitHub

---

**Green Code Diaries** - *Bridging the gap between coding excellence and environmental responsibility.*

Last Updated: November 11, 2025

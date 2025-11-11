// AI Chatbot Logic
class AIChartbot {
    constructor() {
        this.conversations = [];
        this.initializeBot();
    }

    initializeBot() {
        // AI responses database
        this.responses = {
            greeting: [
                "Hello! Welcome to Green Code Diaries! How can I help you today?",
                "Hi there! 👋 What would you like to know?",
                "Welcome! I'm here to assist you. What can I do for you?"
            ],
            about: [
                "I'm an AI assistant for Green Code Diaries - a blog about coding and technology. Would you like to know more about our content?",
                "Green Code Diaries is a blog dedicated to sharing insights about software development, environmental impact of tech, and coding diaries. Is there anything specific you'd like to know?"
            ],
            blog: [
                "We cover a wide range of topics including Python, JavaScript, Web Development, and Environmental Tech. What interests you?",
                "Our blog features articles on coding best practices, tech trends, and sustainable software development. Would you like recommendations?"
            ],
            contact: [
                "You can reach us through the Contact page. We'd love to hear from you! Is there something specific you'd like to discuss?",
                "Feel free to visit our Contact page to get in touch. We respond to all inquiries! 📧"
            ],
            help: [
                "I can help you with:\n• Information about our blog\n• Navigation guidance\n• General questions about coding\n• Recommendations for articles\n\nWhat would you like help with?",
                "Here's what I can assist you with:\n✓ Blog information\n✓ Website navigation\n✓ Coding questions\n✓ Article recommendations\n\nHow can I help?"
            ],
            default: [
                "That's an interesting question! For more detailed information, you might want to check our blog or contact us directly.",
                "I'm here to help! Could you rephrase that or let me know if you have other questions?",
                "Great question! Feel free to explore our blog for more insights or contact us for specific inquiries."
            ]
        };

        this.setupEventListeners();
    }

    setupEventListeners() {
        const chatbotIcon = document.getElementById('chatbot-icon');
        const closeBtn = document.getElementById('chatbot-close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        if (chatbotIcon) {
            chatbotIcon.addEventListener('click', () => this.toggleChat());
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.toggleChat());
        }

        if (sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage());
        }

        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
    }

    toggleChat() {
        const container = document.getElementById('chatbot-container');
        const input = document.getElementById('chatbot-input');
        
        if (container) {
            container.classList.toggle('active');
            if (container.classList.contains('active') && input) {
                input.focus();
                if (this.conversations.length === 0) {
                    this.addBotMessage(this.getRandomResponse('greeting'));
                }
            }
        }
    }

    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();

        if (message === '') return;

        this.addUserMessage(message);
        input.value = '';

        // Simulate bot thinking
        setTimeout(() => {
            this.addTypingIndicator();
            setTimeout(() => {
                this.removeTypingIndicator();
                const response = this.generateResponse(message);
                this.addBotMessage(response);
            }, 1000);
        }, 300);
    }

    generateResponse(userMessage) {
        const message = userMessage.toLowerCase();

        // Keyword matching for smart responses
        if (this.containsKeywords(message, ['hi', 'hello', 'hey', 'greetings'])) {
            return this.getRandomResponse('greeting');
        }
        if (this.containsKeywords(message, ['about', 'who are you', 'what is this'])) {
            return this.getRandomResponse('about');
        }
        if (this.containsKeywords(message, ['blog', 'articles', 'posts', 'content'])) {
            return this.getRandomResponse('blog');
        }
        if (this.containsKeywords(message, ['contact', 'email', 'reach', 'get in touch'])) {
            return this.getRandomResponse('contact');
        }
        if (this.containsKeywords(message, ['help', 'can you help', 'assist'])) {
            return this.getRandomResponse('help');
        }
        if (this.containsKeywords(message, ['thank', 'thanks', 'appreciate', 'great'])) {
            return "You're welcome! Is there anything else I can help you with? 😊";
        }
        if (this.containsKeywords(message, ['bye', 'goodbye', 'see you', 'exit'])) {
            return "Goodbye! Feel free to reach out anytime. Have a great day! 👋";
        }

        return this.getRandomResponse('default');
    }

    containsKeywords(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }

    getRandomResponse(category) {
        const responses = this.responses[category] || this.responses['default'];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user';
        messageDiv.innerHTML = `<div class="message-content user">${this.escapeHtml(message)}</div>`;
        messagesContainer.appendChild(messageDiv);

        this.scrollToBottom();
        this.conversations.push({ type: 'user', message });
    }

    addBotMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot';
        messageDiv.innerHTML = `<div class="message-content bot">${this.escapeHtml(message)}</div>`;
        messagesContainer.appendChild(messageDiv);

        this.scrollToBottom();
        this.conversations.push({ type: 'bot', message });
    }

    addTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;

        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (messagesContainer) {
            setTimeout(() => {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 0);
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AIChartbot();
});
Here is a `README.md` file for your project based on the provided files:

```markdown
# CHATSAKHI - Postpartum Depression Support

CHATSAKHI is a web application designed to support new and first-time mothers navigating the challenges of postpartum depression (PPD). The platform offers information, professional connections, and practical lifestyle guidance to help mothers on their journey to recovery. It features a friendly chatbot, a PPD test, and resources to guide users toward improved mental health.

## Features

- **Home Page**: Introduces the platform and its mission to support mothers with postpartum depression.
- **PPD Information**: Provides detailed information about postpartum depression.
- **Chatbot**: A 24/7 AI-powered chatbot that offers reassurances, practical advice, and a soothing presence.
- **PPD Test**: A self-assessment tool to help users evaluate the presence and severity of postpartum depression.
- **Get Help**: Connects users with professional help and resources.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Chatbot**: OpenAI GPT-3.5 Turbo API
- **Icons**: Google Fonts Material Icons
- **Fonts**: Google Fonts (Poppins, Raleway, Roboto, etc.)
- **Styling**: Custom CSS with responsive design

## Project Structure

```
.
├── app.py                # Flask application to serve the chatbot page
├── chatbot.html          # HTML template for the chatbot interface
├── chatbot.js            # JavaScript for chatbot functionality
├── depressiontest.html   # HTML template for the PPD test
├── index.html            # Home page HTML template
├── README.md             # Project documentation
└── Assets/               # Static assets (CSS, images, etc.)
    ├── Css/
    │   └── style.css     # Custom CSS for the website
    ├── Images/
    │   └── logo.jpeg     # Website logo
    └── favicon/          # Favicon files
```

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/chatsakhi.git
   cd chatsakhi
   ```

2. **Set up a virtual environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install flask
   ```

4. **Run the Flask application**:
   ```bash
   python app.py
   ```

5. **Open the application**:
   - Visit `http://127.0.0.1:5000/` in your browser to access the home page.

## Usage

- **Home Page**: Navigate to the home page to learn more about CHATSAKHI and its mission.
- **Chatbot**: Click on the chatbot icon to interact with the AI-powered chatbot.
- **PPD Test**: Take the PPD test to assess your mental health and get guidance on next steps.
- **Get Help**: Access resources and professional help for postpartum depression.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## Acknowledgments

- **OpenAI**: For providing the GPT-3.5 Turbo API used in the chatbot.
- **Google Fonts**: For the icons and fonts used in the project.
- **CodingNepal**: For the chatbot UI inspiration.

## Contact

For any questions or feedback, please reach out to the team at yashbhosale3568@gmail.com.

---

Made with ❤️ by the Compassionate Team at CHATSAKHI.
```

### Notes:
- Replace `your-username` in the clone URL with your actual GitHub username.
- Ensure that the `API_KEY` in `chatbot.js` is kept secure and not exposed in public repositories. Consider using environment variables or a secure key management system.
- Add a `LICENSE` file if you choose to license the project under MIT or any other license.

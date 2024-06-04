# AI Image Generator

An innovative web application that harnesses the power of Proxy Based Proxy-DALL-E 3 to transform your text prompts into visually stunning, AI-generated images. Share your creations with a vibrant community of artists and enthusiasts.

![Project Logo](client/src/assets/oldman.png)

## 🌟 Features

- **AI-Powered Image Generation**: Use   Proxy-DALL-E 3 model to turn your text descriptions into unique, high-quality images.
- **Community Showcase**: Share your AI-generated masterpieces and explore an ever-growing gallery of community creations.
- **Intuitive UI**: A clean, user-friendly interface built with React and styled with Tailwind CSS.
- **Quick Search**: Easily find images by searching through prompts or artist names.
- **"Surprise Me" Option**: Stuck for ideas? Let us generate a random prompt for you!

## 🚀 Tech Stack

### Frontend
- **React**: For building a dynamic and responsive user interface.
- **React Router**: Enabling smooth, client-side navigation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Fetch API**: Making asynchronous requests to our backend.

### Backend
- **Node.js & Express**: Fast, unopinionated backend.
- **MongoDB & Mongoose**: Flexible, schema-based solution for data modeling.
- **Cloudinary**: Cloud-based image management.
- **dotenv**: For secure environment variable management.

### AI & External Services
- **Proxy-DALL-E 3 API**:   state-of-the-art image generation model.
- **Proxy Proxy-DALL-E API**: A custom proxy to interface with   service.

## 🛠️ Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-image-generator.git
   cd ai-image-generator
   ```

2. Install dependencies:
   ```
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following:
     ```
     OPENAI_API_KEY=your_openai_api_key
     PROXY_URL=your_proxy_url
     MONGODB_URL=your_mongodb_url
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

4. Run the application:
   ```
   # Backend
   npm start

   # Frontend (in a new terminal)
   cd ../frontend
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser.

## 📸 How It Works

1. **Generate an Image**:
   - Navigate to "Create Post".
   - Enter your name and a descriptive prompt.
   - Click "Generate Image" or try "Surprise Me" for a random prompt.
   - Watch as Proxy-DALL-E brings your idea to life!

2. **Share Your Creation**:
   - Happy with your image? Click "Share Post".
   - Your artwork is uploaded to Cloudinary and added to our MongoDB database.
   - It's now part of our community showcase!

3. **Explore & Get Inspired**:
   - Visit the home page to see all community posts.
   - Use the search bar to find specific themes or artists.
   - Let the creativity of others spark your next idea!

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgements
- [Cloudinary](https://cloudinary.com/) for seamless image hosting.
- [MongoDB](https://www.mongodb.com/) for flexible data storage.
- [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for making frontend development a joy.

## 📞 Contact

FAHEEM MUSHTAQ - [twitterhandle](https://x.com/the_faheem)

---

Happy generating! 🎨🤖 Turn your words into art with our AI Image Generator.

Note: You should replace placeholders like `yourusername`, `your_openai_api_key`, and other personal or sensitive information with your actual details. Also, add your project logo and any screenshots that showcase your application's UI and generated images to make the README more visually appealing.
